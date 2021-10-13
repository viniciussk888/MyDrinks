import React, {useState, useCallback} from 'react';
import {FlatList, TextInput, Alert} from 'react-native';

import {Background} from '../../components/Background';
import {Header} from '../../components/Header';
import {Drinks} from '../../components/Drinks';
import {ListDivider} from '../../components/ListDivider';
import {Load} from '../../components/Load';

import {useNavigation} from '@react-navigation/native';

import {DrinkType} from './Types/searchDrinkTypes';
import {searchdrinks} from './Services/searchDrinks';

import {styles} from './styles';

export const Search: React.FC = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState<Array<DrinkType>>([]);

  const handleSearch = useCallback(async () => {
    setLoading(true);
    const response = await searchdrinks({text});
    setDrinks(response);
    if (!response) {
      Alert.alert('Ops!', 'Nenhum resultado encontrado.');
    }
    setLoading(false);
  }, [text]);

  return (
    <Background>
      <Header title="Pesquisar" />
      <TextInput
        placeholder="Digite o nome do seu drink"
        onChangeText={(text: string) => setText(text)}
        style={styles.searchBar}
        onBlur={handleSearch}
      />
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={drinks}
          keyExtractor={item => item.idDrink}
          renderItem={({item}) => (
            <Drinks
              data={item}
              onPress={() =>
                navigation.navigate('Drink', {drinkId: item.idDrink})
              }
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{paddingBottom: 69}}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Background>
  );
};

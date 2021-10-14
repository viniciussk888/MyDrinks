import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CategorySelect} from '../../components/CategorySelect';
import {ListDivider} from '../../components/ListDivider';
import {Background} from '../../components/Background';
import {ListHeader} from '../../components/ListHeader';
import {Profile} from '../../components/Profile';
import {Load} from '../../components/Load';
import {ButtonSearch} from '../../components/ButtonSearch';
import {ButtonFavorites} from '../../components/ButtonFavorites';
import {Drinks} from '../../components/Drinks';

import {getDrinksByCategories} from './Services/getDrinksByCategorie';
import {DrinksType} from './Types/getDrinksByCategorieTypes';

import {styles} from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState<Array<DrinksType>>([]);
  const [category, setCategory] = useState('Ordinary Drink');

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      categoryId === category ? setCategory('') : setCategory(categoryId);
    },
    [category],
  );

  useEffect(() => {
    async function fetchData() {
      if (category !== '') {
        setLoading(true);
        const response = await getDrinksByCategories({categorie: category});
        setDrinks(response);
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonSearch onPress={() => navigation.navigate('Search')} />
        <ButtonFavorites onPress={() => navigation.navigate('Favorites')} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader title="Drinks" subtitle={`Total ${drinks.length}`} />

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
        </>
      )}
    </Background>
  );
};

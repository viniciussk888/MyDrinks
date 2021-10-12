import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, Text, TouchableOpacity, Alert} from 'react-native';

import {CategorySelect} from '../../components/CategorySelect';
import {ListDivider} from '../../components/ListDivider';
import {Background} from '../../components/Background';
import {ListHeader} from '../../components/ListHeader';
import {Profile} from '../../components/Profile';
import {Load} from '../../components/Load';
import {ButtonSearch} from '../../components/ButtonSearch';

import {styles} from './styles';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [category, setCategory] = useState('');

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      console.log(category);
      categoryId === category ? setCategory('') : setCategory(categoryId);
    },
    [category],
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonSearch onPress={() => {}} />
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

          {/*  <FlatList
            data={drinks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{paddingBottom: 69}}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />*/}
        </>
      )}
    </Background>
  );
};

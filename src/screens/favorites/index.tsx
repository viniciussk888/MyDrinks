import React, {useState, useCallback} from 'react';
import {FlatList} from 'react-native';

import {Background} from '../../components/Background';
import {Header} from '../../components/Header';
import {Drinks} from '../../components/Drinks';
import {ListDivider} from '../../components/ListDivider';

import {useNavigation} from '@react-navigation/native';

import {DrinkType} from '../search/Types/searchDrinkTypes';

import {styles} from './styles';

import {useSelector} from 'react-redux';

export const Favorites: React.FC = () => {
  const navigation = useNavigation();
  const drinks = [
    {
      idDrink: useSelector(state => state.idDrink),
      strDrinkThumb: useSelector(state => state.strDrinkThumb),
      strDrink: useSelector(state => state.strDrink),
    },
  ];

  return (
    <Background>
      <Header title="Drink Favorito" />
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
    </Background>
  );
};

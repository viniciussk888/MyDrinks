import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image} from 'react-native';

import {Background} from '../../components/Background';
import {Header} from '../../components/Header';

import {getDrink} from './Services/getDrink';
import {DrinkType} from './Types/getDrinkTypes';

import {Load} from '../../components/Load';

import {styles} from './styles';

export const Drink: React.FC = ({route}) => {
  const drinkId = route.params.drinkId;
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState<DrinkType>({});

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await getDrink({drinkId});
      setDrink(response);
    }
    fetchData();
    setLoading(false);
  }, [drinkId]);

  return (
    <Background>
      <Header title="Detalhes do Drink" />
      {loading ? (
        <Load />
      ) : (
        <>
          <Image
            source={{
              uri: drink.strDrinkThumb,
            }}
            resizeMode="cover"
            style={styles.banner}
          />
          <View style={styles.bannerContent}>
            <Text style={styles.title}>{drink.strDrink}</Text>
            <Text style={styles.category}>{drink.strCategory}</Text>
            <Text style={styles.subtitle}>{drink.strInstructions}</Text>
          </View>
        </>
      )}
    </Background>
  );
};

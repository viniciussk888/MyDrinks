import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image} from 'react-native';

import {Background} from '../../components/Background';
import {Header} from '../../components/Header';

import {getDrink} from './Services/getDrink';
import {DrinkType} from './Types/getDrinkTypes';

import {Load} from '../../components/Load';

import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

import {theme} from '../../global/styles/theme';

import {styles} from './styles';

import {adicionaDrink} from '../../store/actions';

export const Drink: React.FC = ({route}) => {
  const drinkId = route.params.drinkId;
  const id = useSelector(state => state.idDrink);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [drink, setDrink] = useState<DrinkType>({});

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await getDrink({drinkId});
      if (id === response.idDrink) {
        setFavorite(true);
      }
      setDrink(response);
    }
    fetchData();
    setLoading(false);
  }, [drinkId]);

  const addFavoriteDrink = useCallback(() => {
    setFavorite(true);
    dispatch(adicionaDrink(drink.strDrink, drink.strDrinkThumb, drink.idDrink));
  }, [drink]);

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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{drink.strDrink}</Text>
              {favorite === true ? (
                <RectButton style={styles.container}>
                  <Icon name="heart" color={theme.colors.heading} size={24} />
                </RectButton>
              ) : (
                <RectButton style={styles.container} onPress={addFavoriteDrink}>
                  <Icon name="heart-o" color={theme.colors.heading} size={24} />
                </RectButton>
              )}
            </View>
            <Text style={styles.category}>{drink.strCategory}</Text>
            <Text style={styles.subtitle}>{drink.strInstructions}</Text>
          </View>
        </>
      )}
    </Background>
  );
};

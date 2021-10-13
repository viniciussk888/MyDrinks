import React from 'react';
import {View, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {theme} from '../../global/styles/theme';

import {styles} from './styles';

import {Icon} from '../Icon';

import {DrinksType} from '../../screens/home/Types/getDrinksByCategorieTypes';

type Props = RectButtonProps & {
  data: DrinksType;
};

export function Drinks({data, ...props}: Props) {
  const {secondary50, secondary70} = theme.colors;
  return (
    <RectButton {...props}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.iconContainer}
          colors={[secondary50, secondary70]}>
          <Icon icon={data.strDrinkThumb} />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.strDrink}</Text>
            <Text style={styles.id}>{data.idDrink}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.info}>
              <Text style={styles.infoText}>TOQUE PARA VER DETALHES</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}

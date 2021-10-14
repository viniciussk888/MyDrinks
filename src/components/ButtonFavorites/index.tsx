import React from 'react';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import {theme} from '../../global/styles/theme';

export function ButtonFavorites({...props}: RectButtonProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <Icon name="heart" color={theme.colors.heading} size={24} />
    </RectButton>
  );
}

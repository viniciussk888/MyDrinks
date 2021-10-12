import React from 'react';
import {View, Text} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';
import {theme} from '../../global/styles/theme';

export function ButtonSearch({...props}: RectButtonProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <Icon name="home" color={theme.colors.heading} size={24} />
    </RectButton>
  );
}

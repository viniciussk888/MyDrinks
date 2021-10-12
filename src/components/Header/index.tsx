import React, {ReactNode, useCallback} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {theme} from '../../global/styles/theme';
import {styles} from './styles';

type Props = {
  title: string;
};

export function Header({title}: Props) {
  const {secondary100, secondary40, heading} = theme.colors;
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
}

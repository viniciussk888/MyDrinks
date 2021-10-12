import React from 'react';

import {Background} from '../../components/Background';

import {useNavigation} from '@react-navigation/native';

import Lottie from 'lottie-react-native';

export const Splash: React.FC = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);
  return (
    <Background>
      <Lottie
        source={require('../../utils/drink.json')}
        autoPlay
        loop
        resizeMode="contain"
      />
    </Background>
  );
};

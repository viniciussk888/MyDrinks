import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
export function Profile() {
  const getMessage = useMemo(() => {
    const messages = [
      'Hoje é dia de tomar aquele drink',
      'Bora finalizar o dia com aquele drink?',
      'Saiba tudo do seu Drink aqui!',
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];
    return message;
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>seja bem-vindo</Text>
        </View>
        <Text style={styles.message}>{getMessage}</Text>
      </View>
    </View>
  );
}

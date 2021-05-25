import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export function Footer() {

  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Projeto desenvolvido durante a SDS3
      </Text>
    </View>
  );
}
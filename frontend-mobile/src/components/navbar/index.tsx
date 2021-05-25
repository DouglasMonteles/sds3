import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import dsDarkImg from '../../assets/ds-dark50.png';
import styles from './styles';

export function NavBar() {

  return (
    <View style={styles.content}>
      <Image 
        source={dsDarkImg}
        style={styles.navbarImg}
      />
    </View>
  );
}
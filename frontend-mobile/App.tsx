import React from 'react';

import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';

import { NavBar } from './src/components/navbar';
import { Footer } from './src/components/footer';
import { DataTableSale } from './src/components/data-table-sale';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NavBar />
      <DataTableSale />
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

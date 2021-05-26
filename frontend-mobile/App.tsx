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
import { BarChartSale } from './src/components/bar-chart-sale';
import { DonutChartSale } from './src/components/donut-chart-sale';

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <BarChartSale />
        <DonutChartSale />
        <DataTableSale />
      </ScrollView>
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

  scrollContainer: {
    marginVertical: 10,
  },
});

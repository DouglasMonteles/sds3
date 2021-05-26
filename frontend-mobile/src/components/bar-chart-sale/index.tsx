import React from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import { 
  BarChart,
} from 'react-native-chart-kit';

import styles from './styles';

export function BarChartSale() {
  const mockData = {
    labels: {
        categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    },
    series: [
        {
            name: "% Sucesso",
            data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
        }
    ]
};

  return (
    <View style={styles.container}>
      <Text>Todas as vendas</Text>
      <BarChart
        data={{
          labels: mockData.labels.categories,
          datasets: [
            {
              data: mockData.series[0].data,
            },
          ]
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={2} // optional, defaults to 1
        chartConfig={{
          propsForHorizontalLabels: {
            alignmentBaseline: 'center',
          },
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />
    </View>
  );

}
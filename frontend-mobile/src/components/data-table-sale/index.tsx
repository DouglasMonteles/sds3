import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { DataTable } from 'react-native-paper';

import styles from './styles';

export function DataTableSale() {

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Data</DataTable.Title>
          <DataTable.Title>Vendedor</DataTable.Title>
          <DataTable.Title numeric>Clientes visitados</DataTable.Title>
          <DataTable.Title numeric>Negócios fechados</DataTable.Title>
          <DataTable.Title numeric>Valor</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.minFont}>22/04/2021</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.minFont}>Barry Allen</Text>
          </DataTable.Cell>
          <DataTable.Cell numeric>
            <Text style={styles.minFont}>34</Text>
          </DataTable.Cell>
          <DataTable.Cell numeric>
            <Text style={styles.minFont}>25</Text>
          </DataTable.Cell>
          <DataTable.Cell numeric>
            <Text style={styles.minFont}>15017.00</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    </View>
  );
}
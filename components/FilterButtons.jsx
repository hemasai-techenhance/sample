import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterButtons = ({ setFilter }) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={() => setFilter('all')} style={styles.filterButton}>
        <Text style={styles.filterButtonText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('completed')} style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Completed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('pending')} style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Pending</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FilterButtons;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  filterButton: {
    marginHorizontal: 10,
  },
  filterButtonText: {
    color: '#6200ea',
    fontSize: 16,
  },
});

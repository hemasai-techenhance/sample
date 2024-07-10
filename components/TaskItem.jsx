import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ item, index, toggleTaskCompletion }) => {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.customCheckBox}
        onPress={() => toggleTaskCompletion(index)}
      >
        {item.completed && <View style={styles.checkedBox} />}
      </TouchableOpacity>
      <Text style={item.completed ? styles.taskCompleted : styles.taskPending}>
        {item.title}
      </Text>
    </View>
  )
}


export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskPending: {
    fontSize: 16,
    color: '#000',
  },
  taskCompleted: {
    fontSize: 16,
    color: '#6200ea',
    textDecorationLine: 'line-through',
  },
  customCheckBox: {
    width: 15,
    height: 15,
    borderWidth: 0.8,
    borderColor: '#6200ea',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#6200ea',
  },
});

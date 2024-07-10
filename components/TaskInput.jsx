import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    addTask(task);
    setTask('');
  };

  return (
    <View style={styles.taskInput}>
      <View style={styles.inputView}>
        <TextInput
          value={task}
          placeholder="Enter the task here..."
          onChangeText={text => setTask(text)}
          placeholderTextColor="#6200ea"
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleAddTask} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  taskInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  inputView: {
    borderWidth: 0.7,
    width: '80%',
    borderRadius: 10,
    borderColor: '#6200ea',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

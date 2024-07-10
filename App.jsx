import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ToastAndroid } from 'react-native';
import TaskInput from './components/TaskInput';
import FilterButtons from './components/FilterButtons';
import TaskItem from './components/TaskItem';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = task => {
    if (task === "") {
      ToastAndroid.show("Please Enter the Task...",ToastAndroid.SHORT);
      return
    }
    setTasks([...tasks, { title: task, completed: false }]);
  };

  const toggleTaskCompletion = index => {
    let updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    }
    if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
      <TaskInput addTask={addTask} />
      <FilterButtons setFilter={setFilter} />
      <FlatList
        data={filteredTasks}
        renderItem={({ item, index }) => (
          <TaskItem item={item} index={index} toggleTaskCompletion={toggleTaskCompletion} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontWeight: '700',
    fontSize: 20,
    color: '#6200ea',
    textAlign: 'center',
    padding: 10,
  },
}); 
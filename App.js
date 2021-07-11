/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, Fragment } from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from './components/header';
import Form from './components/form';
import AddToDo from './components/addToDo';

const App: () => Node = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          {
            text: text,
            key: Math.random().toString(),
          },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert('OOPS!!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Form item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export default App;

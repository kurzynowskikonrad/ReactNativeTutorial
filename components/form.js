import React, { useState, Fragment } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Form({ item, pressHandler }) {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons name="delete" size={18} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Form;

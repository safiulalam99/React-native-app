// Header.js
import { useState, useRef } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}></View>

      <View style={styles.centerStuff}>
        <Text style={styles.title}>{props.locationName}</Text>
        <Text style={styles.desc}>{props.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  centerStuff: {
    alignItems: 'center',
  },
  desc: {
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  wrapper: {
    paddingTop: 3,
    paddingHorizontal: 20,
  },
});

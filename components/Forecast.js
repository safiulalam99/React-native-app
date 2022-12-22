// Forecast.js
import { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button } from 'react-native';

import Header from '../components/Header';
import Description from '../components/Description';
import UpdateLocation from './updateLocation';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import * as Location from 'expo-location';

export default function Forecast({ time, temp, mood, wind, img }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerStuff}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              paddingTop: 20,
            }}>
            <View>
              <Text>{time}</Text>
            </View>
           
            <View>
              <Text>{temp} °C</Text>
            </View>
            <View>
              <Text>{mood}</Text>
            </View>
            <View>
              <Text>{wind}</Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  centerStuff: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#b3bac4',
  },
});

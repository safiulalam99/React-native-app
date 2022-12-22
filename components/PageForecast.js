// PageForcast.js
import { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  Button,
} from 'react-native';

import Header from '../components/Header';
import Description from '../components/Description';
import UpdateLocation from './updateLocation';

import Forecast from './Forecast';

export default function PageForcast() {
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState([]);
  const [search, setSearch] = useState('tampere');

  const url2 = `https://api.weatherapi.com/v1/forecast.json?key=8efc5483cbd54fc38f800558221612&q=${search}&days=1&aqi=no&alerts=no`;
  const fetchData = async () => {
    try {
      const response = await fetch(url2);
      const jsonData = await response.json();

      setData(jsonData.forecast.forecastday[0].hour);
      console.log('adssD:', data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log('data', data[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{data.time}</Text>
      <View style={styles.centerStuff}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <TextInput
                style={styles.input}
                placeholder="Search Location..."
                keyboardType="text"
                onChangeText={(newText) => setSearch(newText)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title="Current location"
                onPress={() => {
                  fetchData();
                }}
                style={styles.row}
              />
            </View>
          </View>
        </View>

        <View>
          <View style={styles.centerStuff}>
            <Text style={styles.title}>{search}</Text>
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Forecast
                  time={item.time.split(' ')[1]}
                  temp={item.temp_c}
                  wind={item.condition.text}
                  // img={item.condition.icon}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerStuff: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'green',
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'green',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  centerStuff: {
    paddingTop: 20,
  },
  detailsContaner: {
    paddingTop: 1,
  },
  imgContainer: {
    paddingTop: 0,
  },
  cen: {
    paddingTop: 0,
    fontSize: 30,
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-evenly',
  },
});

// MainScreen.js
import { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  Button,
  ToastAndroid,
} from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

import { Avatar, Badge, Icon } from 'react-native-elements';

import Header from '../components/Header';
import Description from '../components/Description';
import UpdateLocation from './updateLocation';

export default function MainScreen() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const [search, setSearch] = useState('madrid');
  const [data, setData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);

  const url2 = `https://api.weatherapi.com/v1/current.json?key=1cee2c5bc11a4d16ab972715220812&q=${search}&aqi=no`;

  const fetchData = async () => {
    showToast();
    try {
      const response = await fetch(url2);
      const jsonData = await response.json();

      setData({
        city: jsonData.location.name,
        description: jsonData.current.condition.text,
        windSpeed: jsonData.current.wind_kph,
        temperature: jsonData.current.temp_c,
        humidity: jsonData.current.humidity,
        img: jsonData.current.condition.icon,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getLocation = () => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  };

  let latitude = 'Waiting..';
  let longitude = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    latitude = JSON.stringify(location.coords.latitude);
    longitude = JSON.stringify(location.coords.longitude);
  }
  let finalCoordinates = latitude + ',' + longitude;
  console.log('final', finalCoordinates);

  const showToast = () => {
    if (Platform.OS == 'android') {
      console.log('Android');
      ToastAndroid.show('Fetching ', ToastAndroid.LONG);
    } else if (Platform.OS == 'ios') {
      console.log('IOS');
    } else {
      console.log('Running WEB');
    }
  };

  useEffect(() => {
    getLocation();
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.centerStuff}>
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
                setSearch(finalCoordinates);
                fetchData();
              }}
              style={styles.row}
            />
          </View>
        </View>

        <View>
          <Button
            title="Search"
            onPress={() => fetchData()}
            style={styles.row}
          />
        </View>
      </View>
      <View>
        <Header locationName={data.city} date={today.toDateString()} />
      </View>

      <View style={styles.imgContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https:' + data.img,
          }}
        />
        <Text style={styles.cen}>{data.description}</Text>
      </View>
      <View style={styles.detailsContaner}>
        <Description
          windSpeed={data.windSpeed}
          temperature={data.temperature}
          humidity={data.humidity}
        />
        <UpdateLocation initialLocation="helsinki" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
  },
  centerStuff: {
    paddingTop: 0,
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

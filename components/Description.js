// Description.js
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample({
  windSpeed,
  humidity,
  temperature
}) {
  return (
    <View style={styles.wrapper}>
      <Image
        src={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.centerStuff}>
        <Text style={styles.temp}>{temperature}°</Text>
      </View>
      <View style={styles.row}>
        <Text>Wind</Text>
        <Text>Humidity</Text>
      </View>
      <View style={styles.row1}>
        <Text style={styles.ts}>{windSpeed}</Text>
        <Text style={styles.ts}>{humidity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerStuff: {
    alignItems: 'center',
  },
temp: {
    fontSize: 50,
    paddingBottom: 15,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  row1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  ts: {
    fontSize: 23,
    fontWeight: 'blur',
  },
    wrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

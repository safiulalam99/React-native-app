import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';


export default function updateLocation ({initialLocation}){
  const update = () =>{

  }
  <View   style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder={initialLocation}
          keyboardType="numeric"
        />
        <Button title="search.." onPress={()=>update
        ()}/>
  </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 14,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
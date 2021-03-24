import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  {/** you can use props function 
  const HomeScreen = props => {
    console.log(props); // or props.navigation
    & when onPress use => props.navigation.navigate('Component') 
  */}
  return (
    <View>
      <Text style={styles.text}>ProFitErol's Home Screen</Text>
      <Button title="Components Screen"
        onPress={() => navigation.navigate('Component')
          &&
          console.log('Components Button Pressed')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('List')
        &&
        console.log('List Button Pressed')}>
        <Text style={styles.btnStyle}>List Screen</Text>
        {/**if you make few more buttons on that they would all fade n back */}
      </TouchableOpacity>

      <Button title="Box Screen"
        onPress={() => navigation.navigate('Box')
          &&
          console.log('Box Button Pressed')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Color')
        &&
        console.log('Color Button Pressed')}>
        <Text style={styles.btnStyle}>Color Screen</Text>
      </TouchableOpacity>

      <Button title="Image Screen"
        onPress={() => navigation.navigate('Image')
          &&
          console.log('Image Button Pressed')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Count')
        &&
        console.log('Count Button Pressed')}>
        <Text style={styles.btnStyle}>Count Screen</Text>
      </TouchableOpacity>
      <Button title="Color Counter"
        onPress={() => navigation.navigate('Square')
          &&
          console.log('Color Counter Button Pressed')}
      />

<TouchableOpacity onPress={() => navigation.navigate('Text')
        &&
        console.log('TextScreen Button Pressed')}>
        <Text style={styles.btnStyle}>Text Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 40
  },
  btnStyle: {
    fontSize: 20,
    padding: 10
  }
});

export default HomeScreen;

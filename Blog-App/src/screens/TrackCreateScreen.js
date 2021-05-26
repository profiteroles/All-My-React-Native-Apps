import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
//import {NavigationsEvent} from 'react-navigation'; 
import Map from '../components/Map';
import { Context as LocationContext } from "../context/LocationContext";
// import "../_mockLocation";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from '../components/Spacer';

//isFocused is if the user leaves the screen indicates to the compiler
const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback= useCallback(location => {
    // console.log('Inside', state.recording); used for debuging b4 the useCall back function
    addLocation(location, state.recording);
  }, [state.recording]);
// console.log('Outside', state.recording); // used for debugging 
  const [err] = useLocation(isFocused,callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text h2 style={styles.text}>Create a Track</Text>
      </Spacer>
      <Map />
      {/* <NativationEvents onWillBlur = { () => console.log('User left the screen') } import the navigationevent for debugging purposes */}
      {err ? <Text>Please Enable Location Services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text:{
    textAlign:'center'
  }
});

export default withNavigationFocus(TrackCreateScreen);

import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from "../context/LocationContext";


const Map = () => {

;

  console.log(locations);
  if (!currentLocation) {
    return <ActivityIndicator
      size="large"
      style={{ marginTop: 200 }} />
  }

  // let points = []; import the point from react navigation

  // for (let i = 0; i< 20; i++){
  //   points.push({
  //     latitude:-32.076247 + i * 0.001,
  //     longitude: 115.754780 + i * 0.001
  //   });
  // }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        // latitude: -32.076247,
        // longitude: 115.754780, freo
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta:0.01
      // }}
    >
      
      <Circle
      center={currentLocation.coords}
      radius={30}
      strokeColor="rgba(158, 158, 255, 1.0)"
      fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline 
      coordinates={locations.map(loc => loc.coords)}
      />
      </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

// export default Map;

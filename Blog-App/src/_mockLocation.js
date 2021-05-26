import * as Location from "expo-location";


const getLocation = increment => {
    return {
        timestamp: 100000000,
        coords: {
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 115.754780 + increment * tenMetersWithDegrees,
        }
    };
};

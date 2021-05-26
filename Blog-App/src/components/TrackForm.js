import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";


    // console.log(locations.length); // gives the lenght of the location for debuggin purposes

    const [saveTrack] =useSaveTrack();

    return (
        <>
            <Spacer>
            </Spacer>
            <Spacer>
            </Spacer>
            <Spacer>
            {
            !recording && locations.length ? 
            (<Button 
            title='Save the Record'
            onPress={saveTrack} 
            />) : null
        }
         </Spacer>   
        </>
    );
export default TrackForm;
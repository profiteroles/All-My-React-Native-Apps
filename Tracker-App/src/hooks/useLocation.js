import { useState, useEffect } from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";


export default (shouldTrack, callback) => {
    // const [subscriber, setSubscriber] = useState(null); //alternative way to fix the bug



    useEffect(() => {

        let subscriber;
        const startWatching = async () => {
            try {
                const {granted} = await requestPermissionsAsync();
                if(!granted){
                    
                }
                
                subscriber = await watchPositionAsync(
                    {
                        
                    },
                    callback
                );
                //setSubscriber(sub); remove for debuging purposes

            } catch (e) {
                setErr(e);
            }
        };


        if (shouldTrack) {
            //when shouldTrack is true watches it`
            startWatching();
        } else {
            //stop watching
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null; //if its not watching than reset the array
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };

    }, [shouldTrack, callback]); // we it one time thats y i have the empty array
    return [err];
};
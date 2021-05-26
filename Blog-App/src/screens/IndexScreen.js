import React, { useContext, useEffect } from 'react';
import { Context } from '../context/BlogContext';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
   


    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};



IndexScreen.navigationOptions = ({ navigation }) => {

    return {
        headerLeft: (
            <View style ={styles.row}>
                <MaterialCommunityIcons name="professional-hexagon" size={24} color="black" />
                <MaterialIcons name="fitness-center" size={24} color="black" />
            </View>
        ),

        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>

            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },

    icon: {
        fontSize: 24
        
    },
    topIcons:{
        margin:5
    }
});

export default IndexScreen;
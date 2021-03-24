import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ResultsList from './ResultsList';

const ResultsDetail = ({ result }) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars {result.review_count} Reviews</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
marginLeft:15
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom:5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultsDetail;
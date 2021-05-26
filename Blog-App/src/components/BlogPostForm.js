import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";


const BlogPostForm = ({onSubmit, initialValues}) => {

    return (
        <View>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({

    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 15,
        margin: 5
    },

    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;
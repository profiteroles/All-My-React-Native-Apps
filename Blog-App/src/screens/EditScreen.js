import React, {useContext} from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    return <BlogPostForm 


    initialValues = {{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content)=> {

        }}
    />;
};

export default EditScreen;
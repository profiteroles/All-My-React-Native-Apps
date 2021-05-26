import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

 //actions ==={addBlogPost:(dispatch) => {return ()=> {}       }}

        const boundActions = {};
       
    };

    return { Context, Provider };
};
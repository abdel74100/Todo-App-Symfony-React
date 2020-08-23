import React, { Component, createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([
        { id: 1, name: "Alabamaokkkkkkk", done: true },
        { id: 2, name: "Georgia", done: false },
        { id: 3, name: "Tennessee", done: false }
    ]);

    //create
    const createTodo = () => {
        console.log("hello ")
    }
    //read
    const readTodo = () => {

    }
    //update
    const updateTodo = () => {

    }
    //delete
    const deleteTodo = () => {

    }
    return (

        <TodoContext.Provider value={{
            todos,
            createTodo: createTodo(),
            updateTodo: updateTodo(),
            deleteTodo: deleteTodo()

        }}>
            {props.children}
        </TodoContext.Provider>

    );
}

export default TodoContextProvider;


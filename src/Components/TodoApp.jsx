import React, { useEffect, useState } from 'react'
// styles
import styles from '../Styles/TodoApp.module.css'
// components
import Inputs from './Inputs';
import Todos from './Todos';
// helper
import { createNewId } from '../Helper/newId';

const TodoApp = () => {

    const [todos , setTodos] = useState (
        JSON.parse(localStorage.getItem('todos')) || []
    )
    const [todoText , setTodoText] = useState('');

    useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify(todos));
    } , [todos])

    const changeTextHandler = event => {
        setTodoText(event.currentTarget.value);
    }

    const addTodoHandler = () => {
        if (todoText) {
            setTodos([...todos , {text: todoText , id: createNewId(todos)}]);
            setTodoText('');
        }
    }

    const keyDownHandler = event => {
        if (event.key === 'Enter' && todoText) {
            setTodos([...todos , {text: todoText , id: createNewId(todos)}]);
            setTodoText('');
        } 
    }

    const deleteTodoHandler = id => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos([...filteredTodos]);
    }

    return (
        <div id = {styles.main}>
            <Inputs data = {{todoText , changeTextHandler , addTodoHandler , keyDownHandler}}/>
            <Todos data = {{deleteTodoHandler , todos}}/>
        </div>
    )
}

export default TodoApp
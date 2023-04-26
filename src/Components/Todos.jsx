import React from 'react'
// styles
import styles from '../Styles/Todos.module.css';
// icons
import { HiTrash } from 'react-icons/hi';

const Todos = ({data}) => {;

    const { deleteTodoHandler , todos } = data;
    
    return (
        <div className = {styles.todoContainer}>
            {
                todos.map(todo => {
                    return (
                        <section className = {styles.todo} key = {todo.id}>
                            <h3 className = {styles.todoText}>{todo.text}</h3>
                            <button onClick = {() => deleteTodoHandler(todo.id)} className = {styles.todoDelete}>
                                <HiTrash style = {{fontSize: '20px'}}/>
                            </button>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default Todos;
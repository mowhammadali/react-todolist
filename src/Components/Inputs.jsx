import React from 'react'
// styles
import styles from '../Styles/Inputs.module.css';
// icons
import { BiPlusMedical } from 'react-icons/bi';

const Inputs = ({data}) => {

    const { todoText , changeTextHandler , addTodoHandler , keyDownHandler} = data;

    return (
        <div className = {styles.inputContainer}>
            <input className = {styles.textBox} type = 'text' value = { todoText} 
            onChange = {changeTextHandler} onKeyDown = {keyDownHandler} placeholder = 'Add Todo...'/>
            <button className = {styles.btn} onClick = {addTodoHandler}>
                <BiPlusMedical style = {{fontSize: '20px'}}/>
            </button>
        </div>
    )
}

export default Inputs;
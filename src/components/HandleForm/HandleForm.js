import React from 'react';
import styles from './HandleForm.module.css'
import Button from "../Button/Button";

const HandleForm = ({onClick}) => {

    const [toDo, setToDo] = React.useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onClick(toDo)
        setToDo('')
    }

    const handleInputChange = (event) => {
        setToDo(event.target.value)
    }



    return (
        <form className={styles.addToDoForm} onSubmit={handleFormSubmit}>
            <input className={styles.enterInput} name='todo' value={toDo} onChange={handleInputChange}/>
            <Button text='Нажми !!!'/>
        </form>
    );
};

export default HandleForm;
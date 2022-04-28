import React from 'react';
import styles from "../ToDoList/ToDoList.module.css";
import Button from "../Button/Button";

const ToDoListItem = ({ elem, onDelete, onSave}) => {

    const [isEditing, setIsEditing] = React.useState(false)
    const [text, setText] = React.useState(elem.value)

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleOnChangeValue = (event) => {
        setText(event.target.value)
    }

    const handleCancelClick = () => {
        setIsEditing(false)
        setText(elem.value)
    }

    const handleSaveClick = () => {
        onSave(text)
        handleCancelClick()
    }

    return (
        <li  className={styles.toDoListItem}>
                {isEditing ?
                    <>
                        {elem.id}:
                        <input value ={text} onChange={handleOnChangeValue} />
                        <Button text='Выйти' isImportant={true} onClick={handleCancelClick}/>
                        <Button text='Записать' onClick={handleSaveClick}/>
                    </> :
                    <>
                        <span className={styles.toDoListText}>
                            {elem.id}:
                            {elem.value}</span>
                        <div className={styles.button__wrapper}>
                            <Button text='Удалить' isImportant={true} onClick={onDelete}/>
                            <Button text='Править' onClick={handleEditClick}/>
                        </div>
                    </>
            }
        </li>
    );
};

export default ToDoListItem;
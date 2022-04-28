import React from 'react';

import styles from './ToDoList.module.css';
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import {useSelector, useDispatch} from "react-redux";
import {deleteElem, updateElem} from "../../slices/ToDoSlice";

const ToDoList = () => {

    const dispatch = useDispatch()

    const list = useSelector((state)=> state.ToDo.list)

    const deleteElemToDoList = (id) => () => {
        dispatch(deleteElem(id))
    }

    const saveElemToDoList = (id) => (text) => {
        dispatch(updateElem({id: id, value: text}))
    }

    return (
        <div>
            <h4>Список задач :</h4>
            <ul className={styles.toDoList}>
                {list.map(elem =>
                        <ToDoListItem key={elem.id}
                                      elem={elem}
                                      onDelete={deleteElemToDoList(elem.id)}
                                      onSave={ saveElemToDoList(elem.id)}/>)}
            </ul>
        </div>
    );
};

export default ToDoList;
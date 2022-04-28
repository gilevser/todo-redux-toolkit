import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice = createSlice( {
    name: 'ToDo',
    initialState: {
        list: [],
        newId: 1
    },
    reducers: {
        deleteElem: (state,action) => {
            state.list = state.list.filter(elem => elem.id !== action.payload)
        },
        addElem: (state,action) => {
            state.list = [...state.list, {id: state.newId++, value: action.payload}]
        },
        updateElem: (state, action) => {
            state.list = state.list.map(elem => elem.id === action.payload.id ? {...elem, value: action.payload.value} : elem)
        }
    }
})

export const {deleteElem, addElem, updateElem} = ToDoSlice.actions

export default ToDoSlice.reducer
import * as api from '../api';

/*

import axios from 'axios';

const url = "https://todolisttttttt.herokuapp.com/todos"; 
const url = "http://localhost:5000/todos" 

export const readTodos = () => axios.get(url);
export const createTodo = newTodo => axios.post(url, newTodo);
export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);

*/

export const readTodos = async () => {
    try {
        const { data } = await api.readTodos()
        return data;
    } catch (error) {
        console.log(error)
        console.log('error en read function')
    }
}

export const createTodo = async (todo) => {
    try {
        const { data } = await api.createTodo(todo)
        return data;
    } catch (error) {
        console.log(error)
        console.log('error en create function')
    }
}

export const updateTodo = async (id, todo) => {
    try {
        const { data } = await api.updateTodo(id, todo) // export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
        return data;
    } catch (error) {
        console.log(error)
        console.log('error en update function')
    }
}

export const deleteTodo = async (id) => {
    try { 
        await api.deleteTodo(id) 
    } catch (error) { 
        console.log(error) 
        console.log('error en delete function')
    } 
    
}

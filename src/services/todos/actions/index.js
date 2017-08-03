import * as types from './types'

import api from '../api';

const addTodo = text => dispatch => {
    api.get().then((todos) => {
        const newTodos = todos.concat(
            {
                id: todos.reduce(
                        (maxId, todo) => Math.max(todo.id, maxId), -1
                    ) + 1,
                completed: false,
                text: text
            }
        );

        api.update(newTodos)
            .then(() => dispatch(updateTodos(newTodos)));
    });
}

const deleteTodo = id => ({ type: types.DELETE_TODO, id })
const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
const completeAll = () => ({ type: types.COMPLETE_ALL })
const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

const initTodos = () => dispatch => {
    return api.get().then((todos) => {
        dispatch(updateTodos(todos));
    });
}

const updateTodos = (todos) => ({ type: types.UPDATE_TODOS, todos})

export {
    types,
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    completeAll,
    clearCompleted,
    initTodos,
    updateTodos,
}

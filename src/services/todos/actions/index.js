import * as types from './types'

const addTodo = text => ({ type: types.ADD_TODO, text })
const deleteTodo = id => ({ type: types.DELETE_TODO, id })
const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
const completeAll = () => ({ type: types.COMPLETE_ALL })
const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

export {
    types,
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    completeAll,
    clearCompleted,
}
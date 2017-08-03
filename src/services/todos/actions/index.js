import * as types from './types'

const addTodo = text => ({ type: types.ADD_TODO, text })

export {
    types,
    addTodo,
}

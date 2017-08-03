import {
    types,
} from './actions';

const INITIAL_STATE = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default (state = INITIAL_STATE, action) => {
    const { ADD_TODO } = types;
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ];
        default:
            return state;
    }
}
  
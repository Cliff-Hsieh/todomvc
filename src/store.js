import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './reducer';

const store = createStore(reducer, devToolsEnhancer());

export default store;

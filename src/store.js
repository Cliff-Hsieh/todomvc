import {
    compose,
    createStore,
    applyMiddleware
} from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(
            thunk,
        ),
        devToolsEnhancer()
    )
);

export default store;

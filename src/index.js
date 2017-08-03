import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import 'todomvc-app-css/index.css'

import { Provider } from 'react-redux'
import store from './store';
import * as actions from './actions';

store.dispatch(actions.services.todos.initTodos());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

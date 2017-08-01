import { combineReducers } from 'redux'

import services from './services/reducer';
import components from './components/reducer';

export default combineReducers({
    services,
});

import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';

const uiReducer = combineReducers({
    filter: filterReducer
});

export default uiReducer;


import dateReducer from './DateReducer.js';
import listReducer from './ListReducer.js';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    dateArray: dateReducer,
    listArray: listReducer
}); 

export default allReducers;
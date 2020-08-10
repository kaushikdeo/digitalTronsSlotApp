import { combineReducers } from 'redux';
import slotsReducer from './slotsReducer';

const rootReducer = combineReducers({
    slots: slotsReducer,
});

export default rootReducer;
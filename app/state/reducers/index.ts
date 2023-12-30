import { combineReducers } from 'redux';
import themeReducer from './theme';
import contactReducer from './contact';

const reducers = combineReducers({
	theme: themeReducer,
	contact: contactReducer,
});

export default reducers;

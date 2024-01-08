import { combineReducers } from 'redux';
import themeReducer from './theme';
import contactReducer from './contact';
import notificationReducer from './notifications';

const reducers = combineReducers({
	theme: themeReducer,
	contact: contactReducer,
	notification: notificationReducer,
});

export default reducers;

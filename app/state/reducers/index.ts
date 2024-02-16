import { combineReducers } from 'redux';
import themeReducer from './theme';
import notificationReducer from './notifications';

const reducers = combineReducers({
	theme: themeReducer,
	notification: notificationReducer,
});

export default reducers;

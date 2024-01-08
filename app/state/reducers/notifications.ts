import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Types --------------------------------------------
export type NotificationStatusType = 'error' | 'success';

type initialNotificationStateType = {
	status: NotificationStatusType | null;
	message: string | null;
};

// Initial State ------------------------------------
export const initialState: initialNotificationStateType = {
	status: null,
	message: null,
};

// Slice -------------------------------------------
export const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		setNotificationStatus(
			state,
			{ payload }: PayloadAction<NotificationStatusType | null>
		) {
			state.status = payload;
		},
		setNotificationMessage(
			state,
			{ payload }: PayloadAction<string | null>
		) {
			state.message = payload;
		},
	},
});

// Actions --------------------------------------------
export const { setNotificationStatus, setNotificationMessage } =
	notificationSlice.actions;

// Selectors ------------------------------------------
export const selectNotification = (state: RootState) => state.notification;

// Reducer --------------------------------------------
export default notificationSlice.reducer;

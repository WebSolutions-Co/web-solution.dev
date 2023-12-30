import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Types --------------------------------------------
type initialContactStateType = {
	name: string | undefined;
	companyName: string | undefined;
	email: string | undefined;
	phoneNumber: string | undefined;
	subject: string | undefined;
	message: string | undefined;
};

// Initial State ------------------------------------
export const initialState: initialContactStateType = {
	name: undefined,
	companyName: undefined,
	email: undefined,
	phoneNumber: undefined,
	subject: undefined,
	message: undefined,
};

// Slice -------------------------------------------
export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setContactName(state, { payload }: PayloadAction<string | undefined>) {
			state.name = payload;
		},
		setContactCompanyName(
			state,
			{ payload }: PayloadAction<string | undefined>
		) {
			state.companyName = payload;
		},
		setContactEmail(state, { payload }: PayloadAction<string | undefined>) {
			state.email = payload;
		},
		setContactPhoneNumber(
			state,
			{ payload }: PayloadAction<string | undefined>
		) {
			state.phoneNumber = payload;
		},
		setContactSubject(
			state,
			{ payload }: PayloadAction<string | undefined>
		) {
			state.subject = payload;
		},
		setContactMessage(
			state,
			{ payload }: PayloadAction<string | undefined>
		) {
			state.message = payload;
		},
		clearContactForm(state) {
			state.name = undefined;
			state.companyName = undefined;
			state.email = undefined;
			state.phoneNumber = undefined;
			state.subject = undefined;
			state.message = undefined;
		},
	},
});

// Actions --------------------------------------------
export const {
	setContactName,
	setContactCompanyName,
	setContactEmail,
	setContactPhoneNumber,
	setContactSubject,
	setContactMessage,
	clearContactForm,
} = contactSlice.actions;

// Selectors ------------------------------------------
export const selectContact = (state: RootState) => state.contact;

// Reducer --------------------------------------------
export default contactSlice.reducer;

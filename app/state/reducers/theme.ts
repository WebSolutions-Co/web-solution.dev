import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Types --------------------------------------------
type initialThemeStateType = {
	isDark: boolean;
};

// Initial State ------------------------------------
export const initialState: initialThemeStateType = {
	isDark: true,
};

// Slice -------------------------------------------
export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeIsDark(state, { payload }: PayloadAction<boolean>) {
			state.isDark = payload;
			localStorage.setItem('theme', payload ? 'dark' : 'light');
			document.documentElement.setAttribute(
				'data-theme',
				payload ? 'dark' : 'light'
			);
		},
	},
});

// Actions --------------------------------------------
export const { setThemeIsDark } = themeSlice.actions;

// Selectors ------------------------------------------
export const selectTheme = (state: RootState) => state.theme;

// Reducer --------------------------------------------
export default themeSlice.reducer;

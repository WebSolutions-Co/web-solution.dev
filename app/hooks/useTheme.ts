import { useSelector } from 'react-redux';
import { useAppDispatch } from '../state/hooks';
import { selectTheme, setThemeIsDark } from '../state/reducers/theme';

const useTheme = () => {
	const dispatch = useAppDispatch();
	const { isDark } = useSelector(selectTheme);

	const setTheme = (state: boolean) => {
		dispatch(setThemeIsDark(state));
	};

	return {
		isDark,
		setTheme,
	};
};

export default useTheme;

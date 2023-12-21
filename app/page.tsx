'use client';

import useTheme from './hooks/useTheme';
import Header from './ui/HomePage/Header';

const Home = () => {
	const { isDark, setTheme } = useTheme();

	return (
		<main
			className={`${
				isDark ? 'dark-theme dark' : 'light-theme'
			} flex min-h-screen flex-col w-full items-center justify-between px-2`}
		>
			<Header />
		</main>
	);
};

export default Home;

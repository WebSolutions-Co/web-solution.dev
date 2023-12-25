'use client';

import useTheme from './hooks/useTheme';
import BuildProjects from './ui/HomePage/BuildProjects';
import Header from './ui/HomePage/Header';

const Home = () => {
	const { isDark } = useTheme();

	return (
		<main
			className={`${
				isDark ? 'dark-theme dark' : 'light-theme'
			} flex min-h-screen flex-col w-full items-center justify-between px-2`}
		>
			{/* <div className='absolute -left-[10vw] top-64 z-10 w-[25vw]'>
				<LottieAnimation animation='https://lottie.host/5ffddeea-0137-4619-8829-0a051823b1a5/Mig6sBBJ4i.json' />
			</div> */}
			<div className='max-w-content w-full'>
				<Header />
				<BuildProjects />
			</div>
		</main>
	);
};

export default Home;

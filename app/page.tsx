'use client';

import useTheme from './hooks/useTheme';
import Build from './ui/HomePage/Build';
import Header from './ui/HomePage/Header';
import Hire from './ui/HomePage/Hire';

const Home = () => {
	const { isDark } = useTheme();

	return (
		<main
			className={`${
				isDark ? 'dark-theme dark' : 'light-theme'
			} flex min-h-screen flex-col w-full overflow-hidden items-center justify-between px-4`}
		>
			{/* <div className='absolute -left-[10vw] top-64 z-10 w-[25vw]'>
				<LottieAnimation animation='https://lottie.host/5ffddeea-0137-4619-8829-0a051823b1a5/Mig6sBBJ4i.json' />
			</div> */}
			<div className='max-w-content w-full'>
				<Header />
				<div className='w-full gap-4 justify-center items-center flex flex-col xl:flex-row '>
					<Build />
					<Hire />
				</div>
			</div>
		</main>
	);
};

export default Home;

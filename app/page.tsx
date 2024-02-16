'use client';

import useTheme from './hooks/useTheme';
import Footer from './ui/Footer';
import Contact from './ui/HomePage/Contact';
import Details from './ui/HomePage/Details';
import Feedback from './ui/HomePage/Feedback';
import Header from './ui/HomePage/Header';
import { TracingBeam } from './ui/tracing-beam';

const Home = () => {
	const { isDark } = useTheme();

	return (
		<main
			className={`${
				isDark
					? 'dark-theme dark bg-dot-white/15'
					: 'light-theme bg-dot-black/20'
			} min-h-screen w-full flex flex-col items-center lg:items-start overflow-hidden pt-12 lg:pt-48`}
		>
			<TracingBeam className='px-4 lg:pl-16'>
				<div className='w-full flex flex-col pb-16 gap-16 md:gap-24 md:pb-24 lg:gap-32 lg:pb-32'>
					<Header />
					<Details />
					<Feedback />
					<Contact />
				</div>
			</TracingBeam>
			<Footer />
		</main>
	);
};

export default Home;

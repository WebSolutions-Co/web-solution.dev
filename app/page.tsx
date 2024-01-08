'use client';

import useTheme from './hooks/useTheme';
import Footer from './ui/footer';
import ContactForm from './ui/forms/contact';
import Details from './ui/home-page/Details';
import Feedback from './ui/home-page/Feedback';
import Header from './ui/home-page/Header';
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
					<ContactForm />
				</div>
			</TracingBeam>
			<Footer />
		</main>
	);
};

export default Home;

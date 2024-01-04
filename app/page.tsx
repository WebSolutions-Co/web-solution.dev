'use client';

import useTheme from './hooks/useTheme';
import Footer from './ui/Footer';
import ContactForm from './ui/Forms/Contact';
import Build from './ui/HomePage/Build';
import Feedback from './ui/HomePage/Feedback';
import Header from './ui/HomePage/Header';
import Hire from './ui/HomePage/Hire';
import Technologies from './ui/HomePage/Technologies';

const Home = () => {
	const { isDark } = useTheme();

	return (
		<main
			className={`${
				isDark ? 'dark-theme dark' : 'light-theme'
			} min-h-screen w-full overflow-hidden flex flex-col items-center`}
		>
			<Header />
			<div className='w-full max-w-content mt-0 px-4 xl:mt-8 gap-4 justify-center items-center flex flex-col xl:flex-row '>
				<Build />
				<Hire />
			</div>
			<Technologies />
			<Feedback />
			<ContactForm />
			<Footer />
		</main>
	);
};

export default Home;

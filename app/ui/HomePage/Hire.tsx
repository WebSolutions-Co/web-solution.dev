import React, { useEffect, useRef } from 'react';
import LottieAnimation from '../animations/LottieAnimation';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import { Player } from '@lottiefiles/react-lottie-player';

const Hire = () => {
	const { ref: intersectionRef, isIntersecting } = useIntersectionObserver();
	const animationRef = useRef<Player>(null);

	useEffect(() => {
		if (isIntersecting) {
			animationRef.current?.play();
			return;
		}

		animationRef.current?.pause();
		setTimeout(() => {
			animationRef.current?.stop();
		}, 300);
	}, [isIntersecting]);

	return (
		<div
			ref={intersectionRef}
			className='xl:w-1/2 lg:w-3/5 md:w-3/4 w-full relative flex flex-col p-5 md:p-10 gap-4 transition-all bg-light-50 dark:bg-dark-750 overflow-hidden rounded-lg border-2 border-light-200 dark:border-dark-700 group hover:scale-[1.02]'
		>
			<div className='w-full md:w-1/2 text-center md:text-left flex flex-col gap-4 z-10'>
				<h2 className='text-2xl font-bold'>
					<span className='text-green-500'>Hire</span> developers
				</h2>
				<p className='text-lg'>
					Choose from a wide range of expert developers. We ensure the
					quality of our developers by choosing only the best
					developers from across the world.
				</p>
				<p className='text-lg'>
					Hiring developers has never been easier. Let us know who you
					seek and we will provide a perfect developer for you!
				</p>
			</div>
			<div
				className={`w-full md:absolute md:-right-16 md:-bottom-4 md:w-[400px] overflow-hidden transition-all duration-300 ${
					isIntersecting
						? 'translate-y-0 md:translate-x-0'
						: 'translate-y-16 md:translate-x-[100px]'
				}`}
				style={{
					opacity: isIntersecting ? '1' : '0',
				}}
			>
				<LottieAnimation
					animation='https://lottie.host/eed96207-4b58-4c76-ab96-0a168bea9197/j1digfdFeh.json'
					// loop={false}
					animationRef={animationRef}
				/>
			</div>
			{/* <div className='bg-gradient-green absolute left-0 bottom-0 w-full h-full opacity-0 transition-all group-hover:opacity-100 -z-10' /> */}
		</div>
	);
};

export default Hire;

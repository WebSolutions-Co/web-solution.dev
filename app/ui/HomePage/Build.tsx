import React, { useCallback, useEffect, useRef } from 'react';
import LottieAnimation from '../animations/LottieAnimation';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import { Player } from '@lottiefiles/react-lottie-player';
import Card from './components/Card';
import CardLink from './components/CardLink';

let hasInit = false;

const Build = () => {
	const { ref: intersectionRef, isIntersecting } = useIntersectionObserver();
	const animationRef = useRef<Player>(null);

	useEffect(() => {
		if (isIntersecting) {
			animationRef.current?.play();
			return;
		}

		if (!hasInit) {
			hasInit = true;
			return;
		}

		animationRef.current?.pause();
		setTimeout(() => {
			animationRef.current?.stop();
		}, 300);
	}, [isIntersecting]);

	return (
		<Card>
			<div className='w-full md:w-1/2 text-center md:text-left flex flex-col z-10 gap-4'>
				<h2 className='text-3xl font-bold'>
					<span className='text-green-500'>Build</span> a Project
				</h2>
				<p className='text-lg'>
					Bring your most innovative project ideas to life. Our team,
					full of expert developers, which understand how to build
					anything you desire.
				</p>
				<p className='text-lg'>
					We make building your project Simple. Contact us, describe
					your amazing project idea and let us build the perfect app.
				</p>
				<CardLink label="Let's build your project" url='#contact' />
			</div>
			<div
				ref={intersectionRef}
				className={`w-full md:absolute md:-right-48 bottom-2 xl:bottom-4 md:w-[600px] overflow-hidden transition-all duration-300 ${
					isIntersecting
						? 'translate-y-0 md:translate-x-0'
						: 'translate-y-16 md:translate-x-[100px]'
				}`}
				style={{
					opacity: isIntersecting ? '1' : '0',
				}}
			>
				<LottieAnimation
					animation='https://lottie.host/c7e9fccd-20dc-4ebc-8754-45895daeae1f/0AEQqDxnLx.json'
					loop={false}
					animationRef={animationRef}
				/>
			</div>
			{/* <div className='bg-gradient-green absolute left-0 bottom-0 w-full h-full opacity-0 transition-all group-hover:opacity-100 -z-10' /> */}
		</Card>
	);
};

export default Build;

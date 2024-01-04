import React, { useRef } from 'react';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';
import LottieAnimation from '../animations/LottieAnimation';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import Card from './components/Card';
import CardLink from './components/CardLink';
import FallbackImage from '@/public/animation-fallbacks/preview-build.svg';
import SubHeading from '../sub-heading';

const Build = () => {
	const { ref: intersectionRef, isIntersecting } = useIntersectionObserver();
	const animationRef = useRef<Player>(null);

	return (
		<Card>
			<div className='w-full md:w-1/2 text-center md:text-left flex flex-col z-10 gap-4 '>
				<SubHeading>
					<span className='text-green-500'>Build</span> a Project
				</SubHeading>
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
				className={`w-full hidden md:block md:absolute md:-right-48 bottom-2 xl:bottom-4 md:w-[600px] overflow-hidden transition-all duration-300 ${
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
					// loop={false}
					animationRef={animationRef}
					fallback={
						<Image
							src={FallbackImage}
							alt='Animation fallback image'
							className='h-full w-full'
						/>
					}
				/>
			</div>
			{/* <div className='bg-gradient-green absolute left-0 bottom-0 w-full h-full opacity-0 transition-all group-hover:opacity-100 -z-10' /> */}
		</Card>
	);
};

export default Build;

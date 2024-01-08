import React from 'react';
import Image from 'next/image';
import LottieAnimation from '../../animations/LottieAnimation';
import FallbackImage from '@/public/animation-fallbacks/preview-hire.svg';

const Hire = () => {
	return (
		<div className=' w-44 mx-auto lg:w-[60%] md:-translate-y-2 scale-110 overflow-hidden'>
			<LottieAnimation
				animation='https://lottie.host/eed96207-4b58-4c76-ab96-0a168bea9197/j1digfdFeh.json'
				fallback={
					<Image
						src={FallbackImage}
						alt='Animation fallback image'
						className='h-full w-full'
					/>
				}
			/>
		</div>
	);
};

export default Hire;

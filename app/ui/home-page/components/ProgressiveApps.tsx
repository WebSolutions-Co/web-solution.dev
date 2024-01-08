import React from 'react';
import Image from 'next/image';
import LottieAnimation from '../../animations/LottieAnimation';
import FallbackImage from '@/public/animation-fallbacks/preview-build.svg';

const ProgressiveApps = () => {
	return (
		<div className='md:w-full w-64 mx-auto md:mx-0 -translate-x-3 md:scale-110 lg:scale-110 overflow-hidden'>
			<LottieAnimation
				animation='https://lottie.host/c7e9fccd-20dc-4ebc-8754-45895daeae1f/0AEQqDxnLx.json'
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

export default ProgressiveApps;

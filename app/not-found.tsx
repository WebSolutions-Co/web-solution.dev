'use client';

import Link from 'next/link';
import Image from 'next/image';
import LottieAnimation from './ui/animations/LottieAnimation';
import fallbackImage from '@/public/animation-fallbacks/preview-not-found.svg';

const NotFound = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center'>
			<div className='w-3/4 md:w-1/3 -mt-16'>
				<LottieAnimation
					fallback={
						<Image src={fallbackImage} alt='under construction' />
					}
					animation='https://lottie.host/b272acf1-4227-4285-baf4-2cd32496cdd1/qdVnaGzFZX.json'
					loop
				/>
			</div>
			<p className='text-center w-2/3 text-xl font-semibold'>
				We are working hard to deliver this to you!
			</p>
			<Link href='/'>
				<button className='bg-green-500 mt-6 h-10 w-36 sm:w-44 font-semibold text-base sm:text-lg text-white rounded-md hover:bg-green-400 transition-all active:scale-95'>
					Return Home
				</button>
			</Link>
		</div>
	);
};

export default NotFound;

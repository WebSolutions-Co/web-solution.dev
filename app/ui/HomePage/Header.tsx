import React, { Suspense } from 'react';
import Image from 'next/image';
import LottieAnimation from '../animations/LottieAnimation';
import FallbackImage from '@/public/preview-header-img.svg';

const Header = () => {
	return (
		<div className='w-full flex h-auto items-center flex-col relative pt-10 md:pt-[118px]'>
			<div className='flex flex-col gap-8 md:gap-10 items-center'>
				<h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[4rem] lg:leading-[6rem] text-center text-gray-800 dark:text-emerald-50'>
					Lifting <span className=' hidden sm:inline'>Your</span>{' '}
					<br className='hidden md:block' />
					<span className='sm:text-green-500'>Web</span>{' '}
					<span className='text-green-500'>Development</span>
					<br />
					Standards
				</h1>
				<p className='text-lg sm:text-xl w-full sm:w-5/6 lg:w-full md:text-2xl font-semibold text-center text-black dark:text-white'>
					Ambitious software company providing modern and innovative
					solutions
					<br />
					for all your web development problems.
				</p>
				<div className='flex gap-4 items-center z-20'>
					<button className='bg-green-500 h-12 w-36 sm:w-44 font-semibold text-base sm:text-lg text-white rounded-md hover:bg-green-400 transition-all active:scale-95'>
						Start a Project
					</button>
					<button className='bg-gray-700 dark:bg-dark-600 h-12 w-36 sm:w-44 text-base font-semibold dark:border-2 dark:border-dark-500 sm:text-lg text-white  rounded-md transition-all active:scale-95 hover:bg-dark-500'>
						Hire Developers
					</button>
				</div>
			</div>
			<div className='w-[50vh] min-w-[50vh] h-[50vh] min-h-[50vh] lg:h-auto max-h-[550px] overflow-hidden lg:w-1/2 -translate-y-12 md:-translate-y-20 lg:-translate-y-16 xl:-translate-y-20'>
				<LottieAnimation
					animation='https://lottie.host/78794e14-1d31-4291-b3df-dced424cda5d/IGxE4TKb7x.json'
					fallback={
						<Image
							src={FallbackImage}
							alt='Animation fallback image'
							className='h-full w-full'
						/>
					}
				/>
			</div>
			<div className='absolute w-full bottom-12 lg:bottom-20 xl:bottom-6 left-0 flex justify-center'>
				<div className='w-[36px] animate-mouseMoveDown h-[60px] border-[1px] rounded-[18px] dark:border-white border-gray-800 relative after:h-[5px] after:w-[5px] after:block after:bg-black dark:after:bg-white opacity-50 after:animate-mouseScrollDown after:left-[15px] after:absolute after:rounded-full' />
			</div>
		</div>
	);
};

export default Header;

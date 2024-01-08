import React from 'react';
import { TextGenerateEffect } from '../text-generate-effect';
import { useRouter } from 'next/navigation';

const Header = () => {
	const router = useRouter();

	return (
		<div className='w-full max-w-content flex h-auto flex-col items-center lg:items-start relative '>
			<div className='flex flex-col gap-4 items-center lg:items-start text-center lg:text-left'>
				<h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[3.25rem] sm:leading-[5rem] lg:leading-[6.5rem] text-gray-800 dark:text-emerald-50'>
					Lifting <span className='sm:hidden inline'>Your</span>
					<span className='hidden sm:inline'>Standards of</span>
					<br />
					<span className='text-green-500'>Web Development</span>
					<br className='sm:hidden inline' />
					<span className='sm:hidden inline'>Standards</span>
				</h1>
				<TextGenerateEffect
					words='Web development agency providing modern and innovative solutions for all your web development problems.'
					className='text-lg sm:text-xl xl:w-2/3 w-full sm:w-5/6 md:w-3/4 md:text-2xl font-semibold text-black dark:text-white'
				/>
				<div className='flex mt-4 gap-4 items-center z-20'>
					<button
						onClick={() => router.push('#contact')}
						className='bg-green-500 h-12 w-36 sm:w-44 font-semibold text-base sm:text-lg text-white rounded-md hover:bg-green-400 transition-all active:scale-95'
					>
						Start a Project
					</button>
					<button className='bg-gray-700 dark:bg-dark-600 h-12 w-36 sm:w-44 text-base font-semibold dark:border-2 dark:border-dark-500 sm:text-lg text-white  rounded-md transition-all active:scale-95 hover:bg-dark-500'>
						Hire Developers
					</button>
				</div>
			</div>
			{/* <div className='w-[50vh] min-w-[50vh] h-[50vh] min-h-[50vh] lg:h-auto max-h-[550px] overflow-hidden lg:w-1/2 -translate-y-12 md:-translate-y-20 lg:-translate-y-16 xl:-translate-y-20'>
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
			</div> */}
			{/* <div className='absolute w-full bottom-12 lg:bottom-20 xl:bottom-6 left-0 flex justify-center'>
				<div className='w-[36px] animate-mouseMoveDown h-[60px] border-[1px] rounded-[18px] dark:border-white border-gray-800 relative after:h-[5px] after:w-[5px] after:block after:bg-black dark:after:bg-white opacity-50 after:animate-mouseScrollDown after:left-[15px] after:absolute after:rounded-full' />
			</div> */}
		</div>
	);
};

export default Header;

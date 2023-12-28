import React from 'react';
import LottieAnimation from '../animations/LottieAnimation';

const Header = () => {
	return (
		<div className='w-full flex items-center flex-col relative mt-20 md:mt-[118px]'>
			<div className='flex flex-col gap-8 md:gap-12 items-center'>
				<h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[4rem] lg:leading-[7rem] text-center text-gray-800 dark:text-emerald-50'>
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
					<button className='bg-green-500 h-12 w-36 font-semibold text-lg text-white rounded-md hover:bg-green-400 transition-all active:scale-95'>
						Start Project
					</button>
					<button className='bg-gray-700 dark:bg-dark-600 h-12 w-36 font-semibold dark:border-2 dark:border-dark-500 text-lg text-white  rounded-md transition-all active:scale-95 hover:bg-dark-500'>
						Hire a Dev
					</button>
				</div>
			</div>
			<div className='w-[50vh] overflow-hidden h-[50vh] lg:w-1/2 -translate-y-8 lg:-translate-y-20'>
				<LottieAnimation animation='https://lottie.host/78794e14-1d31-4291-b3df-dced424cda5d/IGxE4TKb7x.json' />
			</div>
			{/* <div className='absolute w-full bottom-20 left-0 hidden md:flex justify-center'>
				<div className='w-[36px] animate-mouseMoveDown h-[60px] border-[1px] rounded-[18px] dark:border-white border-gray-800 relative after:h-[5px] after:w-[5px] after:block after:bg-black dark:after:bg-white opacity-50 after:animate-mouseScrollDown after:left-[15px] after:absolute after:rounded-full' />
			</div> */}
		</div>
	);
};

export default Header;

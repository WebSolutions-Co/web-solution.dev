import React from 'react';

const Header = () => {
	return (
		<div className='w-full mt-32'>
			<h1 className='text-6xl font-bold tracking-tighter leading-[4rem] text-center text-emerald-50'>
				Lifting <span className=' hidden sm:inline'>Your</span>{' '}
				<span className='sm:text-green-500'>Web</span>{' '}
				<span className='text-green-500'>Development</span> Standards
			</h1>
		</div>
	);
};

export default Header;

import React from 'react';

const MobileNavigation = () => {
	return (
		<div className='flex fixed top-0 left-0 lg:hidden'>
			<div className='flex flex-col gap-1'>
				<div className='h-1 w-4 bg-white' />
				<div className='h-1 w-4 bg-white' />
				<div className='h-1 w-4 bg-white' />
			</div>
		</div>
	);
};

export default MobileNavigation;

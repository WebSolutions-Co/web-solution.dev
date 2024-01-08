import React, { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
	return (
		<div
			id='card'
			className='xl:w-1/2 md:w-3/4 w-full relative flex flex-col p-5 md:p-10 gap-4 transition-all bg-light-50 dark:bg-dark-750 overflow-hidden rounded-lg border-2 border-light-200 dark:border-dark-700 group //lg:hover:scale-[1.02]'
		>
			{children}
		</div>
	);
};

export default Card;

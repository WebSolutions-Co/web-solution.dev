import React from 'react';
import { InfiniteMovingCards } from '../infinite-moving-cards';
import { testimonials } from '@/app/constants/ui';
import SubHeading from '../sub-heading';

const Feedback = () => {
	return (
		<div className='w-full flex flex-col items-center gap-12 py-16 px-4 xl:px-0'>
			<SubHeading>
				What our <span className='text-green-500'>clients</span> say
			</SubHeading>
			<InfiniteMovingCards
				items={testimonials}
				direction='left'
				speed='slow'
			/>
		</div>
	);
};

export default Feedback;

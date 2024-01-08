import React from 'react';
import { InfiniteMovingCards } from '../infinite-moving-cards';
import { testimonials } from '@/app/constants/ui';
import SubHeading from '../sub-heading';
import { CardStack } from '../card-stack';

const Feedback = () => {
	return (
		<div className='w-full max-w-5xl flex flex-col items-center lg:items-start gap-12 xl:px-0'>
			<SubHeading>
				What our <span className='text-green-500'>clients</span> say
			</SubHeading>
			<div className='hidden md:block'>
				<InfiniteMovingCards
					items={testimonials}
					direction='left'
					speed='slow'
				/>
			</div>
			<div className='w-full mt-4 block md:hidden'>
				<CardStack items={testimonials} />
			</div>
		</div>
	);
};

export default Feedback;

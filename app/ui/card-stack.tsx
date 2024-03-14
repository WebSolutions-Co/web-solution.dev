'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FeedbackCardsItemType } from '../types/ui';
import Image from 'next/image';

let interval: any;

export const CardStack = ({
	items,
	offset,
	scaleFactor,
}: {
	items: FeedbackCardsItemType[];
	offset?: number;
	scaleFactor?: number;
}) => {
	const CARD_OFFSET = offset || 10;
	const SCALE_FACTOR = scaleFactor || 0.07;
	const [cards, setCards] = useState<FeedbackCardsItemType[]>(items);

	useEffect(() => {
		startFlipping();
	}, []);

	const startFlipping = () => {
		interval = setInterval(() => {
			setCards((prevCards: FeedbackCardsItemType[]) => {
				const newArray = [...prevCards]; // create a copy of the array
				newArray.unshift(newArray.pop()!); // move the last element to the front
				return newArray;
			});
		}, 10000);

		return () => clearInterval(interval);
	};

	return (
		<div className='relative h-[260px] w-full shadow-xl shadow-green-500/30 rounded-3xl md:h-68 md:w-96'>
			{cards.map((card, index) => {
				return (
					<motion.div
						key={card.id}
						className='absolute dark:bg-black bg-white h-[260px] w-full md:h-68 md:w-96 rounded-3xl p-4 border border-neutral-200 dark:border-white/[0.1] flex flex-col justify-between'
						style={{
							transformOrigin: 'top center',
						}}
						animate={{
							top: index * -CARD_OFFSET,
							scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
							zIndex: cards.length - index, //  decrease z-index for the cards that are behind
						}}
					>
						<div className='flex flex-row justify-between items-center'>
							<span className='flex flex-col gap-1'>
								<span className='text-sm leading-[1.6] dark:text-light-500 text-dark-300 font-normal'>
									{card.name}
								</span>
								<span className='text-sm leading-[1.6] dark:text-light-500 text-dark-300 font-normal'>
									{card.title}
								</span>
							</span>
							{card.image && (
								<Image src={card.image} alt='Profile picture' />
							)}
						</div>
						<div className='mt-2 relative z-20 text-sm leading-[1.6] dark:text-gray-100 text-black font-normal'>
							{card.quote}
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

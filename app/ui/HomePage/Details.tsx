import React from 'react';
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from '../bento-grid';
import LottieAnimation from '../animations/LottieAnimation';
import FallbackImageHire from '@/public/animation-fallbacks/preview-hire.svg';
import FallbackImageBuild from '@/public/animation-fallbacks/preview-build.svg';
import Technologies from './Technologies';

const Details = () => {
	return (
		<BentoGrid className='max-w-4xl md:auto-rows-[20rem]'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
				/>
			))}
		</BentoGrid>
	);
};

const Skeleton = () => (
	<div className='flex flex-1 w-full h-[2rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);

const items = [
	{
		title: 'Focus on Latest Technology',
		description:
			'Our developers use a wide range of latest technologies to build competitive web applications with performance and elegance in mind.',
		header: <Technologies />,
		className: 'md:col-span-2',
	},
	{
		title: 'Progressive Web Apps (PWA)',
		description:
			'Transform your web app in a mobile app in just a few clicks.',
		header: (
			<div className='w-full -translate-x-3 py-3 lg:scale-125'>
				<LottieAnimation
					animation='https://lottie.host/c7e9fccd-20dc-4ebc-8754-45895daeae1f/0AEQqDxnLx.json'
					fallback={
						<Image
							src={FallbackImageBuild}
							alt='Animation fallback image'
							className='h-full w-full'
						/>
					}
				/>
			</div>
		),
		className: 'md:col-span-1',
	},
	{
		title: 'Hire Competitive Work Force',
		description:
			"We go through pain and trouble of finding only the best of the best, so that you don't need to.",
		header: (
			<div className='mx-auto w-3/4 scale-110 overflow-hidden'>
				<LottieAnimation
					animation='https://lottie.host/eed96207-4b58-4c76-ab96-0a168bea9197/j1digfdFeh.json'
					fallback={
						<Image
							src={FallbackImageHire}
							alt='Animation fallback image'
							className='h-full w-full'
						/>
					}
				/>
			</div>
		),
		className: 'md:col-span-1',
	},
	{
		title: 'The Power of Communication',
		description:
			'Understand the impact of effective communication in our lives.',
		header: <Skeleton />,
		className: 'md:col-span-2',
	},
];

export default Details;

import React from 'react';
import { BentoGrid, BentoGridItem } from '../bento-grid';
import Technologies from './Technologies';
import Build from './components/Build';
import Hire from './components/Hire';
import ProgressiveApps from './components/ProgressiveApps';

const Details = () => {
	return (
		<BentoGrid className='max-w-5xl md:auto-rows-[20rem]'>
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
			'Transform your web applications into mobile applications in just a few clicks.',
		header: <ProgressiveApps />,
		className: 'md:col-span-1',
	},
	{
		title: 'Hire Competitive Work Force',
		description:
			'We help you build or scale an expert team of innovative developers for your company.',
		header: <Hire />,
		className: 'md:col-span-1',
	},
	{
		title: 'Build projects quickly and effectively',
		description:
			'How do we approach the process? We first frame the issue, design prototypes to find out what customers want, and then build a perfect application with information we have collected',
		header: <Build />,
		className: 'md:col-span-2',
	},
];

export default Details;

import React from 'react';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiTailwindcss,
	SiSolidity,
	SiNextdotjs,
	SiMysql,
	SiThreedotjs,
	SiNodedotjs,
	SiAngularjs,
	SiVuedotjs,
	SiPostgresql,
	SiMongodb,
} from 'react-icons/si';
import { KEY_TECHNOLOGIES_ITEMS } from '@/app/constants/ui';
import SubHeading from '../sub-heading';

const Technologies = () => {
	const getIcon = (label: string) => {
		const icon = {
			HTML: <SiHtml5 />,
			CSS: <SiCss3 />,
			JavaScript: <SiJavascript />,
			TypeScript: <SiTypescript />,
			React: <SiReact />,
			'Tailwind CSS': <SiTailwindcss />,
			Solidity: <SiSolidity />,
			'Next.js': <SiNextdotjs />,
			MySQL: <SiMysql />,
			'Three.js': <SiThreedotjs />,
			'Node.js': <SiNodedotjs />,
			Angular: <SiAngularjs />,
			'Vue.js': <SiVuedotjs />,
			PostgreSQL: <SiPostgresql />,
			MongoDB: <SiMongodb />,
		}[label];

		return icon;
	};

	return (
		<div className='w-full z-20 flex justify-center mt-16 bg-light-100 dark:bg-dark-700'>
			<div className='w-full max-w-content flex flex-col items-center gap-12 py-16 px-4 xl:px-0'>
				<SubHeading>
					<span className='text-green-500'>Technologies</span> we use
				</SubHeading>
				<div className='flex w-full flex-wrap justify-center items-center gap-4'>
					{KEY_TECHNOLOGIES_ITEMS.map((item) => (
						<a
							key={item.label}
							href={item.url}
							target='_blank'
							className='group gap-4 flex flex-col items-center overflow-hidden rounded-md justify-center border-[1px] border-light-300 dark:border-dark-500 h-36 w-40 lg:h-44 md:w-1/4 lg:w-[23.25%] transition-colors text-center hover:border-green-500 bg-white dark:bg-dark-850'
						>
							<div
								key={'icon'}
								className='text-6xl xl:text-7xl text-green-500 animate-spin-slow-y group-hover:animate-none'
							>
								{getIcon(item.label)}
							</div>
							<div
								key={'text'}
								className='text-lg transition-all duration-150'
							>
								{item.label}
								{/* <div className='w-0 h-px absolute bottom-[1px] left-0 bg-black dark:bg-white group-hover:w-full transition-all' /> */}
							</div>
						</a>
					))}
				</div>
				<button className='text-xl bg-green-500 text-white hover:bg-green-400 active:scale-95 transition-all font-semibold rounded-md w-44 h-12'>
					Discover all
				</button>
			</div>
		</div>
	);
};

export default Technologies;

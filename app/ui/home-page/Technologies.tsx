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
import { InfiniteMovingIcons } from '../infinite-moving-icons';

const Technologies = () => {
	return (
		<div className='w-full h-full flex-col justify-center gap-4 items-center z-20 flex bg-transparent '>
			<InfiniteMovingIcons
				items={ALL_TECHNOLOGIES_ITEMS}
				speed='slow'
				direction='left'
			/>
			<InfiniteMovingIcons
				items={ALL_TECHNOLOGIES_ITEMS}
				speed='slow'
				direction='right'
			/>
		</div>
	);
};

export const ALL_TECHNOLOGIES_ITEMS = [
	{
		label: 'HTML',
		url: 'https://www.w3schools.com/html/',
		icon: <SiHtml5 />,
		color: '#E44D26',
	},
	{
		label: 'CSS',
		url: 'https://www.w3schools.com/css/',
		icon: <SiCss3 />,
		color: '#0074BE',
	},
	{
		label: 'JavaScript',
		url: 'https://www.javascript.com/',
		icon: <SiJavascript />,
		color: '#FFD600',
	},
	{
		label: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		icon: <SiTypescript />,
		color: '#2D79C7',
	},
	{
		label: 'Next.js',
		url: 'https://nextjs.org/',
		icon: <SiNextdotjs />,
	},
	{
		label: 'React',
		url: 'https://reactjs.org/',
		icon: <SiReact />,
		color: '#61DBFB',
	},
	{
		label: 'Angular',
		url: 'https://angular.io/',
		icon: <SiAngularjs />,
		color: '#DD0031',
	},
	{
		label: 'Vue.js',
		url: 'https://vuejs.org/',
		icon: <SiVuedotjs />,
		color: '#00C180',
	},
	{
		label: 'Tailwind CSS',
		url: 'https://tailwindcss.com/',
		icon: <SiTailwindcss />,
		color: '#38BDF8',
	},
	{
		label: 'Three.js',
		url: 'https://threejs.org/',
		icon: <SiThreedotjs />,
	},
	{
		label: 'Node.js',
		url: 'https://nodejs.org/en/',
		icon: <SiNodedotjs />,
		color: '#8CC84B',
	},
	{
		label: 'Solidity',
		url: 'https://docs.soliditylang.org/en/latest',
		icon: <SiSolidity />,
	},
	{
		label: 'React Native',
		url: 'https://reactnative.dev/',
		icon: <SiReact />,
		color: '#61DBFB',
	},
	{
		label: 'MySQL',
		url: 'https://www.mysql.com/',
		icon: <SiMysql />,
		color: '#00758F',
	},
	{
		label: 'PostgreSQL',
		url: 'https://www.postgresql.org/',
		icon: <SiPostgresql />,
		color: '#2F6792',
	},
	{
		label: 'MongoDB',
		url: 'https://www.mongodb.com/',
		icon: <SiMongodb />,
		color: '#4FAA41',
	},
];

export default Technologies;

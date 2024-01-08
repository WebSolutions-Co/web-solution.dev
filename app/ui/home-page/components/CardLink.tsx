import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

export interface CardLinkProps {
	label: string;
	url: string;
}

const CardLink: React.FC<CardLinkProps> = ({ label, url }) => {
	const router = useRouter();

	return (
		<div
			className='flex w-fit group relative mx-auto md:mx-0 cursor-pointer gap-2 hover:gap-4 transition-all items-center text-green-500 text-lg '
			onClick={() => {
				router.push(url);
			}}
		>
			<p>{label}</p>
			<span className='text-xl'>
				<IoArrowForwardOutline />
			</span>
			<div className='w-0 h-px absolute bottom-0 left-0 bg-green-500 group-hover:w-full transition-all' />
		</div>
	);
};

export default CardLink;

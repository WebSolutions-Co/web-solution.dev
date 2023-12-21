'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/app/constants/ui';
import Logo from '@/public/logos/white-horizontal.svg';
import Image from 'next/image';

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className='px-4 py-4'>
				<Link href={'/'}>
					<Image src={Logo} alt='Web solutions logo' width={128} />
				</Link>
			</div>
			<div className='flex fixed flex-col top-0 right-0 gap-0 items-end lg:hidden z-50'>
				<div
					className={`relative flex group flex-col gap-[3px] overflow-hidden h-20 items-end w-20 px-3 py-4 transform-gpu transition-transform duration-150 ease-out ${
						open
							? `translate-y-[120px]`
							: ' delay-[400ms] translate-y-0 '
					}`}
				>
					<div
						className='flex flex-col gap-[3px]'
						onClick={() => setOpen(!open)}
					>
						<div
							className={`h-[3px] w-5 bg-white rounded-full cursor-pointer z-10 transition-all ${
								open
									? 'rotate-45 translate-y-[6px]'
									: 'rotate-0'
							}`}
						/>
						<div
							className={`h-[3px] w-5 bg-white rounded-full cursor-pointer z-10 transition-all ${
								open ? 'translate-x-10' : 'translate-x-0'
							}`}
						/>
						<div
							className={`h-[3px] w-5 bg-white rounded-full cursor-pointer z-10 transition-all ${
								open
									? '-rotate-45 -translate-y-[6px]'
									: 'rotate-0'
							}`}
						/>
					</div>
					<div
						className='bg-green-500 cursor-pointer group-hover:opacity-90 absolute left-0 top-0 translate-x-2 -translate-y-24 h-36 w-36 rotate-45'
						onClick={() => setOpen(!open)}
					/>
				</div>
				{NAVIGATION_ITEMS.map((item, i) => (
					<Link
						key={item.label}
						href={item.url}
						className={`block w-48 bg-green-500 hover:bg-opacity-90 py-2 text-white font-semibold duration-200 transition-transform transform-gpu after:absolute after:top-0 after:-left-[40px] after:border-[20px] hover:after:opacity-90 after:border-b-transparent after:border-l-transparent after:z-20 after:border-solid after:border-green-500`}
						style={{
							paddingLeft: 2 - i + 'rem',
							transform: open
								? `translate(${34 + i * 40}px, -80px)`
								: `translate(240px, -80px)`,
							transitionDelay: open
								? i * 80 + 'ms'
								: 240 - i * 80 + 'ms',
						}}
					>
						{item.label}
					</Link>
				))}
			</div>
		</>
	);
};

export default MobileNavigation;

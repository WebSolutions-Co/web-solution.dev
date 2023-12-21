'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTheme from '@/app/hooks/useTheme';
import { NAVIGATION_ITEMS } from '@/app/constants/ui';
import LogoWhite from '@/public/logos/white-horizontal.svg';
import LogoBlack from '@/public/logos/black-horizontal.svg';
import ToggleThemeButton from './ToggleThemeButton';

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);
	const { isDark } = useTheme();

	const navigationItemClassName =
		'flex w-56 h-10 items-center bg-green-500 hover:bg-opacity-90 py-2 text-white font-semibold duration-200 transition-transform transform-gpu after:absolute after:top-0 after:-left-[40px] after:border-[20px] hover:after:opacity-90 after:border-b-transparent after:border-l-transparent after:z-20 after:border-solid after:border-green-500';

	return (
		<div
			className={`${
				isDark ? 'dark dark-theme bg-darkBg' : 'light-theme bg-white'
			} lg:hidden `}
		>
			<div className='px-4 py-4'>
				<Link href={'/'}>
					<Image
						src={isDark ? LogoWhite : LogoBlack}
						alt='Web solutions logo'
						width={128}
					/>
				</Link>
			</div>
			<div className='flex fixed flex-col top-0 right-0 gap-0 items-end z-50'>
				<div
					className={`relative flex group flex-col gap-[3px] overflow-hidden h-20 items-end w-20 px-3 py-4 transform-gpu transition-transform duration-150 ease-out ${
						open
							? `translate-y-[160px]`
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
						className={navigationItemClassName}
						style={{
							paddingLeft: 4 - i + 'rem',
							transform: open
								? `translate(${26 + i * 40}px, -80px)`
								: `translate(280px, -80px)`,
							transitionDelay: open
								? i * 80 + 'ms'
								: 240 - i * 80 + 'ms',
						}}
					>
						{item.label}
					</Link>
				))}
				<div
					className={navigationItemClassName}
					style={{
						paddingLeft: '1.25rem',
						transform: open
							? `translate(${26 + 3 * 40}px, -80px)`
							: `translate(280px, -80px)`,
						transitionDelay: open
							? 3 * 80 + 'ms'
							: 240 - 3 * 80 + 'ms',
					}}
				>
					<ToggleThemeButton />
				</div>
			</div>
		</div>
	);
};

export default MobileNavigation;

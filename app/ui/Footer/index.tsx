'use client';

import React from 'react';
import LogoWhite from '@/public/logos/white-horizontal.svg';
import LogoBlack from '@/public/logos/black-horizontal.svg';
import Link from 'next/link';
import Image from 'next/image';
import useTheme from '@/app/hooks/useTheme';

const Footer = () => {
	const { isDark } = useTheme();

	return (
		<div
			className={`${
				isDark
					? 'dark bg-dark-850 text-white border-dark-600'
					: 'bg-white text-black border-light-300'
			} px-4 py-36 w-full items-center flex-col-reverse flex justify-between border-t-[1px] `}
		>
			<Link href={'/'}>
				<Image
					src={isDark ? LogoWhite : LogoBlack}
					alt='Web solutions logo'
					width={128}
				/>
			</Link>
		</div>
	);
};

export default Footer;

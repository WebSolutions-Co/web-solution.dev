import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useTheme from '@/app/hooks/useTheme';
import { NAVIGATION_ITEMS } from '@/app/constants/ui';
import LogoWhite from '@/public/logos/white-horizontal.svg';
import LogoBlack from '@/public/logos/black-horizontal.svg';
import ToggleThemeButton from './ToggleThemeButton';

const DesktopNavigation = () => {
	const [hoveredItem, setHoveredItem] = useState('');
	const { isDark } = useTheme();
	const pathname = usePathname();

	return (
		<div
			className={`hidden desktop-navigation lg:flex w-full z-50 left-0 fixed top-0 p-4 ${
				isDark
					? 'dark dark-theme bg-darkBg bg-opacity-80'
					: 'light-theme bg-white bg-opacity-80'
			} border-b-[1px] border-gray-700`}
		>
			<div className='flex max-w-content w-full mx-auto justify-between'>
				<Link href={'/'}>
					<Image
						src={isDark ? LogoWhite : LogoBlack}
						alt='Web solutions logo'
						width={128}
					/>
				</Link>
				<div className='text-gray-800 dark:text-white flex flex-row items-center gap-6'>
					{NAVIGATION_ITEMS.map((item) => (
						<div className={`relative`} key={item.label}>
							<Link
								key={item.label}
								href={item.url}
								className={
									pathname.includes(item.url)
										? 'text-green-500'
										: ''
								}
								onMouseEnter={() => setHoveredItem(item.label)}
								onMouseLeave={() => setHoveredItem('')}
							>
								{item.label}
								<div
									className={`absolute bottom-0 left-0 h-px ${
										hoveredItem === item.label
											? 'w-full'
											: 'w-0'
									} transition-all transform-gpu duration-150 bg-gray-900 dark:bg-white `}
								/>
							</Link>
						</div>
					))}
					<div className='w-px h-8 bg-gray-900 dark:bg-white' />
					<ToggleThemeButton />
				</div>
			</div>
		</div>
	);
};

export default DesktopNavigation;

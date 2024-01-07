'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '../utils/cn';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		title: string;
		image?: string | StaticImport;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'20s'
				);
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'40s'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'80s'
				);
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20  max-w-full px-4 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map((item, idx) => (
					<li
						className='w-[350px] max-w-full relative bg-dark-800 rounded-2xl border flex-shrink-0 border-dark-700 p-6 md:w-[450px]'
						key={item.name}
					>
						<blockquote>
							<div className='relative z-20 flex flex-row justify-between items-center'>
								<span className='flex flex-col gap-1'>
									<span className='text-sm leading-[1.6] text-light-400 font-normal'>
										{item.name}
									</span>
									<span className='text-sm leading-[1.6] text-light-400 font-normal'>
										{item.title}
									</span>
								</span>
								{item.image && (
									<Image
										src={item.image}
										alt='Profile picture'
									/>
								)}
							</div>
							<div className='mt-2 relative z-20 text-sm leading-[1.6] text-gray-100 font-normal'>
								{item.quote}
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};

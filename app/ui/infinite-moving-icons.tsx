'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '../utils/cn';
import { MovingIconType } from '../types/ui';

export const InfiniteMovingIcons = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: MovingIconType[];
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

	const addAnimation = () => {
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
	};

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
				'scroller relative z-20 max-w-full px-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map((item) => (
					<li
						className={`bg-transparent block relative text-dark-600 dark:text-light-100
						} after:-top-1 after:left-0 after:text-white after:absolute after:content-[${item.label}]`}
						style={{
							color: item.color,
						}}
						key={item.label}
					>
						<a
							key={item.label}
							href={item.url}
							target='_blank'
							className='block text-5xl'
						>
							{item.icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

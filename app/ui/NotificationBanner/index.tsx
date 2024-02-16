'use client';

import React, { useEffect, useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';
import useNotification from '@/app/hooks/useNotification';

const NotificationBanner = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { status, message } = useNotification();

	useEffect(() => {
		if (!status) {
			setTimeout(() => {
				setIsVisible(false);
			}, 300);
			return;
		}

		setIsVisible(true);
	}, [status]);

	if (!isVisible) return null;

	const backgroundColor = status
		? {
				success: 'bg-green-500',
				error: 'bg-error',
		  }[status]
		: '';

	return (
		<div
			className={`fixed bottom-4 animate-fadeIn text-xl flex p-4 items-center rounded-lg z-50 gap-2 ${backgroundColor} transition-opacity text-black h-14 left-4`}
			style={{
				width: 'calc(100vw - 2rem)',
				opacity: status ? 1 : 0,
			}}
		>
			{status === 'success' ? (
				<IoIosCheckmarkCircleOutline />
			) : (
				<RxCrossCircled />
			)}
			<p className='text-base'>{message}</p>
		</div>
	);
};

export default NotificationBanner;

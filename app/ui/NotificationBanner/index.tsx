'use client';

import React, { useEffect, useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
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

	if (!status) return null;

	const backgroundColor = {
		success: 'bg-green-500',
		error: 'bg-error',
	}[status];

	return (
		<div
			className={`fixed bottom-4 text-xl flex p-4 items-center rounded-lg z-50 gap-2 ${backgroundColor} text-black h-14 left-4`}
			style={{
				width: 'calc(100vw - 2rem)',
			}}
		>
			<IoIosCheckmarkCircleOutline />
			<p className='text-base'>Mail sent successfully</p>
		</div>
	);
};

export default NotificationBanner;

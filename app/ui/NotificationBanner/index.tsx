'use client';

import useNotification from '@/app/hooks/useNotification';
import React, { useEffect, useState } from 'react';

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

	return <div>{message}</div>;
};

export default NotificationBanner;

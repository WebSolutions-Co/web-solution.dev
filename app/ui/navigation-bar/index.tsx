'use client';

import React from 'react';
import MobileNavigation from './components/mobile-navigation';
import DesktopNavigation from './components/desktop-navigation';

const Navigation = () => {
	return (
		<div>
			<MobileNavigation />
			<DesktopNavigation />
		</div>
	);
};

export default Navigation;

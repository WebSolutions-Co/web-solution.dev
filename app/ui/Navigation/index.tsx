'use client';

import React from 'react';
import MobileNavigation from './components/MobileNavigation';
import DesktopNavigation from './components/DesktopNavigation';

const Navigation = () => {
	return (
		<div>
			<MobileNavigation />
			<DesktopNavigation />
		</div>
	);
};

export default Navigation;

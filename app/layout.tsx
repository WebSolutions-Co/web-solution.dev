import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './ui/Navigation';
import RootProviders from './ui/root-providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Web Solutions',
	description:
		'Ambitious software company providing modern and innovative solutions for all your web development needs.',
};

export interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang='en'>
			<RootProviders>
				<body
					className={`${inter.className} min-h-screen overflow-x-hidden`}
				>
					{/* <BackgroundBeams /> */}
					<Navigation />
					{children}
				</body>
			</RootProviders>
		</html>
	);
};

export default RootLayout;

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Navigation from './ui/Navigation';

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
			<body className={`${inter.className} overflow-x-hidden`}>
				<Navigation />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;

import { Metadata } from 'next';

export const metadataBaseUrl = new URL('https://www.web-solution.dev');

export const metadataTitle = 'Web Solutions';
export const metadataSiteName = 'Web Solutions';
export const metadataDescription =
	'Ambitious software company providing modern and innovative solutions for all your web development needs.';

export const sharedMetadataIcons: Metadata['icons'] = [
	{
		rel: 'icon',
		url: '/public/logos/logo.svg',
	},
];
export const sharedMetadataOpenGraph: Metadata['openGraph'] = {
	type: 'website',
	title: metadataTitle,
	description: metadataDescription,
	locale: 'en_US',
	siteName: metadataSiteName,
	url: 'https://www.web-solution.dev',
	emails: ['zunec.jan@gmail.com'],
	images: [
		{
			url: '/public/logos/logo.svg',
		},
	],
};

export const sharedMetadata: Metadata = {
	title: metadataTitle,
	description: metadataDescription,
	applicationName: metadataSiteName,
	keywords: [
		'Web',
		'development',
		'solutions',
		'developer',
		'develop',
		'websites',
		'applications',
		'build',
	],
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
	icons: sharedMetadataIcons,
	openGraph: sharedMetadataOpenGraph,
	authors: {
		name: 'Jan Žunec',
		url: 'https://www.web-solution.dev',
	},
	robots: {
		index: true,
		follow: true,
		noarchive: false,
		nosnippet: false,
		noimageindex: false,
		notranslate: false,
	},
	metadataBase: metadataBaseUrl,
};

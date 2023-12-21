import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				green: {
					100: '#00FFA3',
					200: '#00EF93',
					300: '#00DF83',
					400: '#00CF73',
					500: '#00BF63',
					600: '#00AF53',
					700: '#009F43',
					800: '#008F33',
					900: '#007F23',
				},
				darkBg: 'rgb(26, 26, 26)',
			},
			fontSize: {
				title: '2.8rem',
			},
			maxWidth: {
				content: '1376px',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
export default config;

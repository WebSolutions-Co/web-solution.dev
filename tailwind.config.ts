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
				'gradient-green':
					'linear-gradient(-135deg, #191919, #191919, #191919, #191919, #00BF63)',
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
				light: {
					50: '#F9F9F9',
					100: '#F3F3F3',
					200: '#E3E3E3',
					300: '#D3D3D3',
					400: '#C3C3C3',
					500: '#B3B3B3',
					550: '#A9A9A9',
					600: '#939393',
					700: '#838383',
				},
				dark: {
					100: '#838383',
					200: '#737373',
					300: '#636363',
					400: '#535353',
					500: '#434343',
					600: '#333333',
					700: '#232323',
					750: '#191919',
					800: '#131313',
					900: '#030303',
				},
				darkBg: 'rgb(26, 26, 26)',
			},
			fontSize: {
				title: '2.8rem',
			},
			maxWidth: {
				content: '1376px',
			},
			animation: {
				mouseMoveDown:
					'moveDown 3s infinite cubic-bezier(0.4, 0, 0.2, 1)',
				mouseScrollDown:
					'scrollDown 3s infinite cubic-bezier(0.4, 0, 0.2, 1)',
				fadeIn: 'fadeIn 300ms ease',
				slideInRight: 'slideInRight 100ms linear',
			},
			keyframes: {
				moveDown: {
					'0%': { top: '0' },
					'70%': { top: '10px' },
					'90%': { top: '0' },
					'100%': { top: '0' },
				},
				scrollDown: {
					'0%': { top: '18px', opacity: '1' },
					'70%': { top: '54px', opacity: '0' },
					'90%': { top: '18px', opacity: '0' },
					'100%': { top: '18px', opacity: '1' },
				},
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				slideInRight: {
					'0%': {
						transform: 'translateX(60%)',
					},
					'100%': {
						opacity: 'translateX(0)',
					},
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
export default config;

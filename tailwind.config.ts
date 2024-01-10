import type { Config } from 'tailwindcss';

const svgToDataUri = require('mini-svg-data-uri');

const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const addVariablesForColors = ({ addBase, theme }: any) => {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
};

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				bebas: ['"Bebas Neue"', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-green':
					'linear-gradient(-135deg, #191919, #191919, #191919, #191919, #00BF63)',
			},
			colors: {
				error: '#FF5861',
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
					850: '#0d0d0d',
					900: '#030303',
				},
				darkBg: 'rgb(26, 26, 26)',
			},
			fontSize: {
				title: '2.8rem',
			},
			maxWidth: {
				content: '1260px',
			},
			boxShadow: {
				side: '20px -120px 90px 4px #00BF6333, -20px -120px 90px 4px #00BF6333',
				left: '-20px 0px 40px 4px #00BF6333',
				right: '20px 0px 40px 4px #00BF6333',
			},
			animation: {
				scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
				mouseMoveDown:
					'moveDown 3s infinite cubic-bezier(0.4, 0, 0.2, 1)',
				mouseScrollDown:
					'scrollDown 3s infinite cubic-bezier(0.4, 0, 0.2, 1)',
				fadeIn: 'fadeIn 300ms ease',
				slideInRight: 'slideInRight 100ms linear',
				'spin-slow-y': 'rotate-y-slow 4s linear infinite',
			},
			keyframes: {
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
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
				'rotate-y-slow': {
					'0%': {
						'-webkit-transform': 'rotateY(0deg)',
						'-moz-transform': 'rotateY(0deg)',
						'-ms-transform': 'rotateY(0deg)',
						'-o-transform': 'rotateY(0deg)',
						transform: 'rotateY(0deg)',
					},
					'100%': {
						'-webkit-transform': 'rotateY(360deg)',
						'-moz-transform': 'rotateY(360deg)',
						'-ms-transform': 'rotateY(360deg)',
						'-o-transform': 'rotateY(360deg)',
						transform: 'rotateY(360deg)',
					},
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		addVariablesForColors,
		({ matchUtilities, theme }: any) => {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme('backgroundColor')),
					type: 'color',
				}
			);
		},
	],
};
export default config;

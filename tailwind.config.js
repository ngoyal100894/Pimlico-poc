const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
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
				// 'hero-reviews': url('public/assets/reviews-hero.pngs'),
			},
			fontFamily: {
				bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
				inter: ['Inter'],
				sans: ['Open Sans', 'sans-serif'],
				lexend: ['Lexend'],
			},
			colors: {
				Primary: {
					900: 'rgba(214, 0, 0, 1)',
				},
				Success: {
					900: 'rgba(19, 110, 43, 1)',
				},
				Secondary: {
					900: 'rgba(52, 64, 84, 1)',
				},
			},
		},
	},
	plugins: [],
};

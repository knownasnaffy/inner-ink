/* eslint-disable unicorn/prefer-module */
import type { Config } from 'tailwindcss'

export default {
	content: ['./frontend/**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
		require('daisyui'),
	],
	daisyui: {
		themes: true,
	},
} satisfies Config

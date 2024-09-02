/* eslint-disable unicorn/prefer-module */
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import tailwindAnimate from 'tailwindcss-animate'
import daisyui from 'daisyui'

export default {
	content: ['./index.html', './frontend/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		tailwindAnimate, typography, daisyui
	],
	daisyui: {
		themes: true,
	},
} satisfies Config

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-dark": "#1D3531",
				"brand-default": "#CCEC60",
				"brand-light": "#5D8A83",
			},
			maxWidth: {
				grid: "77.5rem",
			},
			backgroundImage: {
				hero: "url('/assets/bg-hero.svg')",
			},
		},
	},
	plugins: [],
};
export default config;

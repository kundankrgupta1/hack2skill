/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hover-bg": "url('./Rectangle 4200.png')",
			},
			backgroundColor: {
				'hover-transparent': 'rgba(255, 255, 255, 0.5)', // Transparent overlay color
			},
		},
	},
	plugins: [],
}
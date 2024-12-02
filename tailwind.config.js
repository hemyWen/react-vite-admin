/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"color-primary": "var(--ant-color-primary)"
			}
		}
	},
	plugins: [],
	darkMode: "class"
};

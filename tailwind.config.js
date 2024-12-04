/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"color-primary": "var(--ant-color-primary)",
				"color-text-base": "var(--ant-color-text-base)"
			}
		}
	},
	plugins: [],
	darkMode: "selector"
};

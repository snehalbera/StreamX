/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Poppins"', "sans-serif"],
                poppins: ["Poppins", "sans"],
            },
            colors: {
                primary: "#FDD976",
                secondary: "#744BB9",
            },
        },
    },
    plugins: [],
};

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
                primary: "#FFC728",
                mutedprimary: "#332500",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};

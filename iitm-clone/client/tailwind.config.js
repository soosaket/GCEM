/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gcem-maroon': '#800000', // Approximate maroon color
                'gcem-gold': '#FFD700',   // Approximate gold color
                'gcem-gray': '#f4f4f4',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

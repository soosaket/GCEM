/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'iitm-maroon': '#800000', // Approximate maroon color
                'iitm-gold': '#FFD700',   // Approximate gold color
                'iitm-gray': '#f4f4f4',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

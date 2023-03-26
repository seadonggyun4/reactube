/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary': '#597aff',
                'error': '#ef4444',
                'success': '#4ade80',
                'dark': '#212639',
                'light': '#f8f8f8'
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1b721b',
                secondary: '#6c976c',
                text: '#e0eede',
                'base-dark': '#535252',
                'base-mid': '#333',
                'base-light': '#dcdcdc',
            },
        },
    },
    plugins: [],
};

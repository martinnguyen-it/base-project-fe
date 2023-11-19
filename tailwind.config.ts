/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'blue-pacific': '#4285F4',
                'dark-turquoise': '#2AD2C9',
                'eastern-blue': '#008fa1',
                'iris-blue': '#00bdc40a',
                'dim-gray': '#5D5D5D',
                'white-smoke': '#F5F5F5',
                'blue-solitude': '#E3E8EC',
                'blue-aqua': '#06F6F7',
                'slate-grey': '#727C8A',
                'blue-heather': '#BDC3CB',
            },
            width: {
                'right-layout': 'calc(100vw - 240px)',
                'left-sidebar': 'calc(100% - 56px)',
            },
            boxShadow: {
                top: '0px 0px 5px #ccc, 0px -1px 5px #ccc',
                bottom: '0px 1px 0px #ccc',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};

export {};

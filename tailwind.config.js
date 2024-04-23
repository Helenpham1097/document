const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'class',
    content: [
        './resources/**/*.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
    ],
    safelist: [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'grid-cols-7',
        'sm:grid-cols-2',
        'sm:grid-cols-3',
        'sm:grid-cols-4',
        'sm:grid-cols-5',
        'sm:grid-cols-6',
        'sm:grid-cols-7',
        'lg:grid-cols-2',
        'lg:grid-cols-3',
        'lg:grid-cols-4',
        'lg:grid-cols-5',
        'lg:grid-cols-6',
        'lg:grid-cols-7',
        'col-span-5',
        'col-span-6',
        'row-span-2',
        'space-x-reverse',
        'animate-ripple', // Agregado del segundo archivo
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        fontFamily: {
            'body': ['Inter', 'sans-serif'],
            'display': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                purple: {
                    '50': '#f9f4ff',
                    '100': '#f3e9ff',
                    '200': '#e1c7ff',
                    '300': '#cfa5ff',
                    '400': '#ab62ff',
                    '500': '#871eff',
                    '600': '#7a1be6',
                    '700': '#6517bf',
                    '800': '#511299',
                    '900': '#46258F'
                },
                green: {
                    '50': '#f5fffd',
                    '100': '#ebfffc',
                    '200': '#ccfff6',
                    '300': '#adfff1',
                    '400': '#70ffe7',
                    '500': '#32ffdc',
                    '600': '#2de6c6',
                    '700': '#26bfa5',
                    '800': '#1e9984',
                    '900': '#197d6c'
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        ul: {
                            li: {
                                'padding-left': '96',
                            }
                        },
                        '.not-prose': {
                            margin: '2rem 0 !important',
                        }
                    },
                },
            }),
            animation: {
                ripple: 'ripple var(--duration, 1.5s) ease calc(var(--i, 0) * 0.1s) infinite',
            },
            keyframes: {
                ripple: {
                    '50%': {
                        transform: 'scale(var(--scale, 1.25))',
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')({
            modifiers: [],
        }),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        plugin(function ({ addComponents, theme }) {
            addComponents({
                '.ripple': {
                    '--size': 'calc(var(--baseSize, 80px) + var(--sizeStep, 64px) * var(--i, 0))',
                    width: 'var(--size)',
                    height: 'var(--size)',
                    opacity: 'calc(var(--baseOpacity, 0.25) - var(--opacityStep, 0.05) * var(--i, 0))',
                    animation: theme('animation.ripple'),
                },
            })
        }),
    ],
};

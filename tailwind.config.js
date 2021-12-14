const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './resources/**/*.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
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
                gold: {
                    light: '#ddbf5f',
                    base: '#d4af37',
                    dark: '#aa8c2c'
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h2: {
                            fontWeight: '700',
                            color: theme('colors.gray.900'),
                        },
                        a: {
                            'text-decoration': 'none',
                            '&:hover': {
                                'text-decoration': 'underline',
                            }
                        },

                        ul: {
                            li: {
                                'padding-left': '96',
                            }
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        layers: ['utilities', 'base', 'components'],
        content: [
            './app/**/*.php',
            './resources/**/*.html',
            './resources/**/*.js',
            './resources/**/*.blade.php',
        ],
        options: {
            defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
            whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
        },
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        extend: {
            height: {
                'screen-24': 'calc(100vh - 4rem)'
            },
            fontFamily: {
                sans: [
                    'Nunito Sans', ...defaultTheme.fontFamily.sans
                ],
                system:[
                    `system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",
          Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji",
          "Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
                ],
                mono: [
                    'monospace',
                ],
            },
            lineHeight: {
                normal: '1.6',
                loose: '1.75',
            },
            maxWidth: {
                none: 'none',
                '7xl': '80rem',
                '8xl': '88rem'
            },
            spacing: {
                '1.5': '0.375rem',
                '7': '1.75rem',
                '9': '2.25rem'
            },
            boxShadow: {
                'lg': '0 -1px 27px 0 rgba(0, 0, 0, 0.04), 0 4px 15px 0 rgba(0, 0, 0, 0.08)',
                'dome': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            },
            inset:{
                '16': '4rem',
                'nav': '4.1rem',
            },
            fontSize: {
                'xs': '.8rem',
                'sm': '.925rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.125rem',
                '5xl': '2.625rem',
                '6xl': '4rem',
            },
        },
    },
    variants: {
        borderRadius: ['responsive', 'focus'],
        borderWidth: ['responsive', 'active', 'focus'],
        width: ['responsive', 'focus'],
        display: ['responsive', 'motion-safe', 'motion-reduce'],
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography'),
        function({ addUtilities }) {
            const newUtilities = {
                '.transition-fast': {
                    transition: 'all .2s ease-out',
                },
                '.transition': {
                    transition: 'all .5s ease-out',
                },
            }
            addUtilities(newUtilities)
        },
    ],
};

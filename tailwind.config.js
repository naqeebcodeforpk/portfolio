/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-lead': theme('colors.slate.700'),
            '--tw-prose-links': theme('colors.slate.900'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-counters': theme('colors.slate.400'),
            '--tw-prose-bullets': theme('colors.slate.300'),
            '--tw-prose-hr': theme('colors.slate.200'),
            '--tw-prose-quotes': theme('colors.slate.900'),
            '--tw-prose-quote-borders': theme('colors.slate.200'),
            '--tw-prose-captions': theme('colors.slate.400'),
            '--tw-prose-code': theme('colors.slate.900'),
            '--tw-prose-pre-code': theme('colors.slate.100'),
            '--tw-prose-pre-bg': theme('colors.slate.900'),
            '--tw-prose-th-borders': theme('colors.slate.300'),
            '--tw-prose-td-borders': theme('colors.slate.200'),
            fontWeight: theme('fontWeight.normal'),
            h2: {
              fontWeight: theme('fontWeight.semibold'),
              letterSpacing: '-0.025em'
            },
            h3: {
              fontWeight: theme('fontWeight.medium'),
              letterSpacing: '-0.025em'
            },
            a: {
              fontWeight: theme('fontWeight.normal'),
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }
          }
        }
      })
    }
  },
  plugins: [typography]
}

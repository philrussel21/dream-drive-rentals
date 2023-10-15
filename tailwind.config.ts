import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '2.5rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
    extend: {
			colors: {
				'brand-gold': '#FFC700',
				'brand-silver': '#C0C0C0',
				'brand-platinum': '#E5E5E5',
				'brand-off-white': '#FAF9F6',
				'brand-charcoal': '#0D0D0D',
			}
    },
  },
  plugins: [],
}
export default config

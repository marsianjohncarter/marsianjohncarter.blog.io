/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./app/**/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		primary: {
    			'50': '#eff6ff',
    			'100': '#dbeafe',
    			'200': '#bfdbfe',
    			'300': '#93c5fd',
    			'400': '#60a5fa',
    			'500': '#3b82f6',
    			'600': '#2563eb',
    			'700': '#1d4ed8',
    			'800': '#1e40af',
    			'900': '#1e3a8a',
    			'950': '#172554'
    		},
    		aspectRatio: {
    			'3/2': '3 / 2',
    			'16/9': '16 / 9'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require("tailwindcss-animate")
    ],
};
  
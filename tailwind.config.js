/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f1',
          100: '#daeede',
          200: '#b5deba',
          300: '#8cc894',
          400: '#5eab69',
          500: '#3c8a48',
          600: '#1E5631', // Main primary
          700: '#174627',
          800: '#14371f',
          900: '#112e1a',
          950: '#071a0e',
        },
        secondary: {
          50: '#fcf8f4',
          100: '#f8eee3',
          200: '#f0d8be',
          300: '#e7bb91',
          400: '#d89b64',
          500: '#cb8142',
          600: '#8B4513', // Main secondary
          700: '#80410f',
          800: '#66340c',
          900: '#552c0a',
          950: '#2c1605',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffecc6',
          200: '#ffd788',
          300: '#ffbb45',
          400: '#ffa21f',
          500: '#FF7F00', // Main accent
          600: '#e65b00',
          700: '#bf3d02',
          800: '#9a3008',
          900: '#7e280b',
          950: '#461203',
        },
        success: {
          500: '#34D399',
        },
        warning: {
          500: '#FBBF24',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
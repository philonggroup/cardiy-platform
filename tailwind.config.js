/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
          extend: {
                  colors: {
                            primary: '#2563EB',
                            'primary-dark': '#1D4ED8',
                            'primary-light': '#DBEAFE',
                            accent: '#F59E0B',
                            dark: '#1E293B',
                            'bg-base': '#FFFFFF',
                            'bg-light': '#F9FAFB',
                            'text-main': '#111827',
                            'text-sub': '#6B7280',
                            border: '#E5E7EB',
                  },
                  fontFamily: {
                            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                  },
                  borderRadius: {
                            DEFAULT: '8px',
                            lg: '12px',
                            xl: '16px',
                  },
                  boxShadow: {
                            card: '0 1px 4px rgba(0,0,0,0.06)',
                            blue: '0 8px 24px rgba(37,99,235,0.3)',
                            nav: '0 -2px 8px rgba(0,0,0,0.06)',
                  },
          },
    },
    plugins: [],
};

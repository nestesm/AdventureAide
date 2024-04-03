/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3B82F6',
        'custom-gray': '#718096',
        'custom-purple': '#8B5CF6',
        'custom-error': '#EF4444',
        'custom-success': '#10B981',
        'custom-info': '#6B7280',
        'custom-warning': '#F59E0B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

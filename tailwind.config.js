// tailwind.config.js
module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins-regular': ['Poppins-Regular'],
      'poppins-bold': ['Poppins-Bold'],
      'poppins-medium': ['Poppins-Medium'],
      'poppins-extrabold': ['Poppins-ExtraBold'],
      'poppins-semibold': ['Poppins-SemiBold'],
    },
    extend: {
      backgroundImage: {
        'login-background': "url('/img/login-background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

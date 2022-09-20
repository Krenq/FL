/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: 'full',
        sm: 'full',
        lg: 'full',
        xl: 'full',
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      overBar: '1750px',
      '2xl': '1920px',
    },
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
        '80pe': 'rgba(255, 255, 255, 0.8)',
      },
      black: {
        DEFAULT: '#000000',
        '70pe': 'rgba(0, 0, 0, 0.7)',
      },
      gray: {
        DEFAULT: '#DBDCDA',
        linear:
          'linear-gradient(180deg, #F6F9F8 0%, rgba(246, 249, 248, 0.3) 100%)',
        100: '#FCFDFB',
        light: '#F7F8F6',
        light2: '#EDEEEC',
        platinum: '#E8E9E7',
        'quick-silver': '#828584',
      },
      primary: {
        DEFAULT: '#337202',
        hover: '#1F5201',
        active: '#3E7E0B',
      },
      green: {
        '50pe': 'rgba(51, 114, 2, 0.5)',
      },
      disable: '#DBDCDA',
      stroke: '#DBDCDA',
      link: '#1877F2',
      input: {
        disable: '#DBDCDA',
        filled: '#F7F8F6',
        typing: '#EDEEEC',
        'error-bg': '#FDF4F5',
        error: 'rgba(223, 24, 11, 0.2)',
      },
      nude: {
        1: '#FAF7F2',
        2: '#FEEFDF',
        3: '#EDD2B4',
      },
      label: {
        pink: '#E7929C',
        'pink-2': '#F14155',
        radial:
          'radial-gradient(59.52% 59.52% at 50% 50%, #DCFFE9 0%, #F3F3F3 100%)',
        bg: '#EFF5F0',
        green: '#C5C1AB',
        orange: '#FF7F37',
        yellow: '#FFFDC2',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      'noto-sans': ['Noto Sans', 'sans-serif'],
      lora: ['Lora', 'serif'],
    },
    extend: {
      spacing: {
        '3px': '3px',
        '5px': '5px',
        '6px': '6px',
        '10px': '10px',
        '26px': '26px',
        '34px': '34px',
        '38px': '38px',
        '42px': '42px',
        '60px': '60px',
        '76px': '76px',
        '86px': '86px',
        '100px': '100px',
        '104px': '104px',
        '222px': '222px',
        '272px': '272px',
        '384px': '384px',
        '410px': '410px',
        '460px': '460px',
        '1100px': '1100px',
        '1816px': '1816px',
        '4.2%': '4.2%',
        '4.5%': '4.5%',
        '5%': '5%',
      },
      fontSize: {
        '10px': '10px',
        '13px': '13px',
      },
    },
  },
  plugins: [],
};

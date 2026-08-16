import { defineConfig, defineRecipe } from '@pandacss/dev';

const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderRadius: 'full',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '1px solid transparent',
  },
  variants: {
    tone: {
      black: {
        bg: 'brand.black',
        color: 'brand.white',
        _hover: { bg: 'neutral.800' },
      },
      white: {
        bg: 'brand.white',
        color: 'brand.black',
        _hover: { transform: 'scale(1.05)' },
      },
      outline: {
        bg: 'brand.white',
        color: 'brand.black',
        borderColor: 'brand.black',
        _hover: { bg: 'brand.black', color: 'brand.white' },
      },
    },
    size: {
      sm: { fontSize: 'sm', px: '6', py: '3' },
      lg: { fontSize: { base: 'base', md: 'xl' }, px: { base: '5', md: '8' }, py: { base: '3', md: '5' } },
      full: { fontSize: 'sm', px: '6', py: '4', width: '100%' },
    },
  },
  defaultVariants: {
    tone: 'black',
    size: 'sm',
  },
});

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  jsxFramework: 'react',

  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,
      },
      tokens: {
        colors: {
          brand: {
            black: { value: '#000000' },
            white: { value: '#ffffff' },
          },
          surface: {
            navBar: { value: 'rgba(255, 255, 255, 0.80)' },
            glass: { value: 'rgba(255, 255, 255, 0.20)' },
            glassStrong: { value: 'rgba(255, 255, 255, 0.90)' },
            overlay: { value: 'rgba(0, 0, 0, 0.20)' },
            muted: { value: '#fafaf9' },
            subtle: { value: '#e4e4e7' },
            footer: { value: '#0a0a0a' },
          },
          border: {
            glassLight: { value: 'rgba(255, 255, 255, 0.30)' },
            neutral: { value: '#e5e5e5' },
          },
          neutral: {
            50: { value: '#fafafa' },
            200: { value: '#e5e5e5' },
            500: { value: '#737373' },
            800: { value: '#262626' },
          },
        },
        fonts: {
          sans: { value: "'Open Sauce One', -apple-system, BlinkMacSystemFont, sans-serif" },
        },
      },
    },
  },

  globalCss: {
    'html, body, #root': {
      height: '100%',
      margin: 0,
      padding: 0,
    },
    body: {
      fontFamily: 'sans',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },

  outdir: 'styled-system',
});

import { plugin } from 'postcss'

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        'Header': ['Anton'],
        'Body': ['Spectral'],
        'Poppins': ['Poppins']
      }
    },
  },
  plugins: [],
}

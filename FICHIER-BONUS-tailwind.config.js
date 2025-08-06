/** @type {importation('tailwindcss')'.Configurer} */
exporter défaut {
  contenu: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  thème: {
    extend: {
      policeFamille: {
        " sans ": ["Inter", 'système-ui', " sans empattement "],
        "affichage ": ['Affichage Playfair', "serif"],
      },
      couleurs: {
        primaire: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c2d12',
          800: '#6b21a8',
          900: '#581c87',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fondu: {
          '0%': { opacité: '0', transformer: 'translateY(20px)' },
          '100%': { opacité: '1', transformer: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transformer: 'translateY(100%)' },
          '100%': { transformer: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transformer: 'translateY(-100%)' },
          '100%': { transformer: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transformer: 'scale(0.95)', opacité: '0' },
          '100%': { transformer: 'scale(1)', opacité: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}


tailwind.config = {
theme: {
    extend:{
        gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            Outfit: ["Outfit","sans-serif"],
            ovo:["Ovo", "serif"]
        },
        animation:{
            spin_slow: 'spin 6s linear infinite'
        },
        colors:{
            lightHover: '#fcf4ff',
            darkHover:'#2a004a',
            darkTheme:'#11001F'
          
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff'
        }

    },
    
},
darkMode: 'selector'
}

//------------------//-----------------------------------त्रयी-------------------------------------
module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { 
            transform: 'translateY(0)', 
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': { 
            transform: 'translateY(-25%)', 
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        backInDown: {
          '0%': { 
            transform: 'translateY(-2000px)', 
            opacity: 0.7,
          },
          '80%': { 
            transform: 'translateY(0)', 
            opacity: 0.7,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        backInLeft: {
          '0%': { 
            transform: 'translateX(-2000px)', 
            opacity: 0.7,
          },
          '80%': { 
            transform: 'translateX(0)', 
            opacity: 0.7,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        circle: {
          '0%, 100%': { 
            transform: 'translateX(0) translateY(0)', 
          },
          '25%': { 
            transform: 'translateX(100px) translateY(0)', 
          },
          '50%': { 
            transform: 'translateX(100px) translateY(100px)', 
          },
          '75%': { 
            transform: 'translateX(0) translateY(100px)', 
          },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
        backInDown: 'backInDown 1s ease-out',
        backInLeft: 'backInLeft 1s ease-out',
        circle: 'circle 4s linear infinite',
        spinSlow: 'spinSlow 6s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 10s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      boxShadow: {
        'custom-shadow': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        slowRotate: 'rotate 10s linear infinite', // Ensure this matches your HTML class
      }
    },
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#061B49",
          blue: "#0B2E75",
          royal: "#143C91",
          magenta: "#C2185B",
          pink: "#D92E7F",
          yellow: "#FFD447",
          teal: "#0EA5A5",
          gold: "#C99A2E",
          cream: "#FFF8EA",
          soft: "#F8FAFC"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(6, 27, 73, 0.12)",
        card: "0 12px 35px rgba(6, 27, 73, 0.08)",
        glow: "0 18px 55px rgba(194, 24, 91, 0.18)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(6, 27, 73, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 27, 73, 0.05) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite"
      }
    }
  },
  plugins: []
};

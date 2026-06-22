/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom portfolio colors
        brand: {
          50: "hsl(221, 100%, 96%)",
          100: "hsl(221, 96%, 91%)",
          200: "hsl(221, 93%, 82%)",
          300: "hsl(221, 90%, 72%)",
          400: "hsl(221, 87%, 63%)",
          500: "hsl(221, 83%, 53%)",
          600: "hsl(221, 80%, 45%)",
          700: "hsl(221, 77%, 37%)",
          800: "hsl(221, 74%, 29%)",
          900: "hsl(221, 71%, 22%)",
        },
        violet: {
          500: "hsl(271, 91%, 65%)",
          600: "hsl(271, 88%, 58%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(221, 83%, 53%, 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(221, 83%, 53%, 0.6)" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, hsl(224, 71%, 4%) 0%, hsl(222, 47%, 11%) 50%, hsl(224, 71%, 4%) 100%)",
        "card-gradient": "linear-gradient(145deg, hsl(222, 47%, 13%) 0%, hsl(222, 47%, 8%) 100%)",
        "shimmer-gradient": "linear-gradient(90deg, transparent 0%, hsl(221, 83%, 53%, 0.15) 50%, transparent 100%)",
      },
      boxShadow: {
        glow: "0 0 20px hsl(221, 83%, 53%, 0.3)",
        "glow-lg": "0 0 40px hsl(221, 83%, 53%, 0.4)",
        "card-hover": "0 20px 60px -15px hsl(0, 0%, 0%, 0.5)",
        "inner-glow": "inset 0 1px 0 hsl(221, 83%, 53%, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        success: "#22C55E",
        danger: "#EF4444",
        muted: "#666666",
        surface: "#F5F5F5",
        border: "#E0E0E0",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      lineHeight: {
        tight: "1.2",
        snug: "1.3",
        normal: "1.5",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "48px",
      },
    },
  },
  plugins: [],
}


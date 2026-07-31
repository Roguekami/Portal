/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-tertiary-fixed-variant": "#464744",
        "tertiary-fixed-dim": "#c7c7c3",
        "error-container": "#ffdad6",
        "outline": "#74777d",
        "secondary": "#7b5900",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#dfe2ec",
        "surface-bright": "#f8f9ff",
        "on-error": "#ffffff",
        "inverse-on-surface": "#eef0fa",
        "surface-dim": "#d7dae3",
        "on-secondary-container": "#755400",
        "on-tertiary-container": "#8b8b88",
        "on-surface-variant": "#44474d",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "surface-tint": "#4e6077",
        "primary-fixed-dim": "#b5c8e3",
        "primary-fixed": "#d2e4ff",
        "on-primary-fixed-variant": "#36485f",
        "secondary-fixed": "#ffdea4",
        "secondary-fixed-dim": "#f0bf5c",
        "surface": "#f8f9ff",
        "tertiary": "#0d0f0d",
        "surface-container-high": "#e5e8f1",
        "tertiary-fixed": "#e3e2df",
        "on-tertiary": "#ffffff",
        "secondary-container": "#fcca66",
        "primary": "#000f21",
        "primary-container": "#12253a",
        "outline-variant": "#c4c6cd",
        "on-tertiary-fixed": "#1b1c1a",
        "on-surface": "#181c22",
        "surface-variant": "#dfe2ec",
        "on-primary": "#ffffff",
        "on-secondary-fixed": "#261900",
        "on-primary-fixed": "#081c31",
        "tertiary-container": "#232422",
        "on-background": "#181c22",
        "inverse-surface": "#2d3138",
        "surface-container": "#ebeef7",
        "background": "#f8f9ff",
        "inverse-primary": "#b5c8e3",
        "error": "#ba1a1a",
        "surface-container-low": "#f1f3fd",
        "on-secondary-fixed-variant": "#5d4200",
        "on-primary-container": "#7a8da6"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "sidebar_width": "280px",
        "margin_mobile": "16px",
        "margin_desktop": "40px",
        "container_max": "1440px",
        "gutter": "24px",
        "base": "8px"
      },
      "fontFamily": {
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Sora", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "display-lg": ["Sora", "sans-serif"],
        "data-table": ["IBM Plex Mono", "monospace"],
        "data-numeric": ["IBM Plex Mono", "monospace"],
        "headline-md": ["Sora", "sans-serif"]
      },
      "fontSize": {
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "data-table": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "data-numeric": ["16px", {"lineHeight": "24px", "fontWeight": "500"}],
        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

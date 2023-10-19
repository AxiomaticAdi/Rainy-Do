import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },

    daisyui: {
        themes: [
            {
                "Custom-White": {
                    "primary": "#F8F9FA",
                    "primary-focus": "#E9ECEF",
                    "primary-content": "#FFFFFF",

                    "secondary": "#CED4DA",
                    "secondary-focus": "#ADB5BD",
                    "secondary-content": "#343A40",

                    "accent": "#b4e9d6",
                    "accent-focus": "#8cdec0",
                    "accent-content": "#ffffff",

                    "neutral": "#343A40",
                    "neutral-focus": "#4b96b9",
                    "neutral-content": "#ffffff",

                    "base-100": "#6C757D",
                    "base-200": "#495057",
                    "base-300": "#343A40",
                    "base-content": "#898d90",

                    "info": "#1c92f2",
                    "success": "#009485",
                    "warning": "#ff9900",
                    "error": "#ff5724",

                    "--rounded-box": "1rem",
                    "--rounded-btn": "1.9rem",
                    "--rounded-badge": "1.9rem",

                    "--animation-btn": ".25s",
                    "--animation-input": ".2s",

                    "--btn-text-case": "uppercase",
                    "--navbar-padding": ".5rem",
                    "--border-btn": "10px",
                },
            },
        ],
    },

    plugins: [require("daisyui")],
};
export default config;

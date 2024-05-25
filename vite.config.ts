import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],
    define: {
        global: "window", // Fix for amazon-cognito-identity-js
    },
});

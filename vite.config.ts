import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        "process.env": {},
    },
    server: {
        open: true,
    },
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                // svgr options
            },
        }),
        tsconfigPaths(),
    ],
});

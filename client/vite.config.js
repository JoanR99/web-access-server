import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'^/api/.*': {
				target: 'http://localhost:5000/',
				changeOrigin: true,
				secure: false,
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/main.scss";`,
			},
		},
	},
	plugins: [react()],
});

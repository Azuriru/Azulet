import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: true,
		open: true,
		port: 5000
	},
	plugins: [
		sveltekit(),
		purgeCss({
			safelist: {
				greedy: [/^fa-/],
			},
		}),
	],
	optimizeDeps: {
		exclude: [ '@fortawesome/fontawesome-free' ]
	}
});
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			domain: null,
			fallback: null,
			precompress: false
		}),
		paths: {
			base: '/casinowork',
		},
		prerender: {
			default: true
		},
		// hydrate the <div id="svelte"> element in src/app.html
        //target: "#svelte",
	}
	,

};

export default config;
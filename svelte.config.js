import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';


const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        //target: '#svelte',
        adapter: adapter({
            // default options are shown
            pages: 'docs',
            assets: 'docs',
            fallback: null
        }),
        /*
        If you need to serve your file from a sub directory
        paths: {
            base: '/your-sub-dir',
        },
        */
    },
    preprocess: [preprocess({
        postcss: true
    })]
};

export default config;
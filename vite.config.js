import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    // Add this
    css: {
        preprocessorOptions: {
            // // if using SCSS
            // scss: {
            //     additionalData: `
            //         @use '$lib/scss/variables' as *;    
            //         @use '$lib/scss/mixins' as *;
            //     `,
            // },
            // if using SASS
            sass: {
                additionalData: `
                    @use '$lib/sass/variables' as *;    
                    @use '$lib/sass/mixins' as *;
                `,
            },
        },
    }
});

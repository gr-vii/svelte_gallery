const sveltePreprocess = require("svelte-preprocess");

const postcss_config = {
	plugins: [
		// require("tailwindcss"),
		// require('postcss-windicss'),
	],
}

const preprocess = sveltePreprocess({
	postcss: postcss_config,
});

module.exports = {
	preprocess,
};

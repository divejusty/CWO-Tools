let mix = require('laravel-mix')

mix
	.setPublicPath('/')
	.vue({
		extractStyles: true,
		globalStyles: './src/sass/_variables.scss',
	})

	.copyDirectory('src/reqs', 'assets/reqs')
	.js('src/js/app.js', 'assets/')
	.sass('src/sass/app.scss', 'assets/')

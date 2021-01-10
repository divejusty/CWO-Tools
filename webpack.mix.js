let mix = require('laravel-mix')

mix
	.setPublicPath('dist/')
	.vue({
		extractStyles: true,
		globalStyles: './src/sass/_variables.scss',
	})

	.copyDirectory('src/reqs', 'dist/assets/reqs')
	.copy(['src/php/index.php', 'src/php/app.php'], 'dist/')
	.js('src/js/app.js', 'assets/')
	.sass('src/sass/app.scss', 'assets/')

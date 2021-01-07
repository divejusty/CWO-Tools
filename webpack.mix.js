let mix = require('laravel-mix')

mix.copyDirectory('src/reqs', 'assets/reqs')
	.js('src/js/app.js', 'assets/')
	.sass('src/sass/app.scss', 'assets/')
	.options({
		extractVueStyles: true,
		globalVueStyles: 'src/sass/_variables.scss',
	 })
	 .setPublicPath('/')

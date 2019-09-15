var path = {
	build:{ //Тут мы укажем куда складывать готовые после сборки файлы
		html: 'build/',
		js: 'build/js',
		css: 'build/css/',
		img: 'build/img/',
		fonts: 'build/fonts'
	},
	src: {
		html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
		js: 'src/js/main.js', //В стилях и скриптах нам понадобятся только main файлы
		style: 'src/sass/style.sass',
		img: 'src/img/**,*.*',
		fonts: 'src/fonts/**/*.*'
	},
	watch:{ //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/sass/**/*.sass',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './build'
}


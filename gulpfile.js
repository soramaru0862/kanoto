const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //Sassコンパイル
const plumber = require('gulp-plumber'); //エラー時の強制終了を防止
const notify = require('gulp-notify'); //エラー発生時にデスクトップ通知する
const postcss = require('gulp-postcss'); //autoprefixerとセット
const autoprefixer = require('autoprefixer'); //ベンダープレフィックス付与
const sourcemaps = require('gulp-sourcemaps')
const cleanCss = require('gulp-clean-css')
const browserSync = require('browser-sync').create()

// sassビルド
gulp.task('sass', () => gulp
.src('./sass/**/*.scss', gulp.task('sass'))
.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
.pipe(sourcemaps.init())
.pipe(sass.sync({
  outputStyle: 'expanded'
}))
.pipe(postcss([autoprefixer({
  "overrideBrowserslist": ["> 1% in JP", "not dead", "last 4 versions", "ie >= 11", "Android >= 5"],
  cascade: false
})]))
.pipe(cleanCss())
.pipe(sourcemaps.write('./'))
.pipe(gulp.dest('./css')))

// sass 監視
gulp.task('sass-watch', () => gulp
.src('./sass/**/*.scss', gulp.task('sass-watch'))
.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
.pipe(sourcemaps.init())
.pipe(sass.sync({
  outputStyle: 'expanded'
}))
.pipe(sourcemaps.write('./'))
.pipe(gulp.dest('./css')))

// ホットリロード
gulp.task('browser-sync', () => {
  return  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 8080,
    reloadOnRestart: true
  })
})

gulp.task('reload', (done) => {
  browserSync.reload()
  done()
})

gulp.task('build', () => {
  gulp.task('sass')
})


gulp.task('watch', (done) => {
  gulp.watch('./sass/**/*.scss', gulp.series('sass-watch', 'reload'))
  gulp.watch('./**/*.html', gulp.task('reload'))
  gulp.watch('./js/*.js', gulp.task('reload'))
  done()
})

gulp.task('default',
  gulp.parallel('watch', 'browser-sync')
  )

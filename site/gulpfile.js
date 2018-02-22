//initialize all of our variables
var app, base, concat, directory, gulp, gutil, hostname, path, refresh, sass, uglify, imagemin, minifyCSS, del, browserSync, autoprefixer, gulpSequence, shell, sourceMaps, plumber;

var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];
var diretorioDist = "dist/";
//var diretorioDist = "dist/app";

//load all of our dependencies
//add more here if you want to include more libraries
gulp        = require('gulp');
gutil       = require('gulp-util');
concat      = require('gulp-concat');
uglify      = require('gulp-uglify');
sass        = require('gulp-sass');
sourceMaps  = require('gulp-sourcemaps');
imagemin    = require('gulp-imagemin');
minifyCSS   = require('gulp-clean-css');
browserSync = require('browser-sync');
autoprefixer = require('gulp-autoprefixer');
gulpSequence = require('gulp-sequence').use(gulp);
shell       = require('gulp-shell');
plumber     = require('gulp-plumber');
connect = require('gulp-connect-php');

gulp.title = "grunt";
gulp.task('browserSync', function() {
    browserSync({
        browser: 'chrome',
        server: {
            baseDir: "app/"   
        },
        options: {
            
            reloadDelay: 250
        },
        port: 4200,
        notify: false
    });
});


//compressing images & handle SVG files
gulp.task('images', function(tmp) {
    gulp.src([
    		'app/images/*.jpg', 
    		'app/images/*.png'
    	])
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
        .pipe(gulp.dest('app/images'));
});

//compressing images & handle SVG files
gulp.task('images-deploy', function() {
    gulp.src([
    		'app/images/**/*', 
    		'!app/images/README'
    	])
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest(diretorioDist+'/images'));
});

//compiling our Javascripts
gulp.task('scripts', function() {
    //this is where our dev JS scripts are
    //'node_modules/angular/angular.min.js',
    return gulp.src([,  
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/popper.js/dist/popper.min.js',
                    'node_modules/lodash/lodash.min.js',
                    'node_modules/ui-select/dist/select.min.js',
                    'node_modules/angular-sanitize/angular-sanitize.min.js',
                    'node_modules/angular-br-filters/release/angular-br-filters.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    				'app/scripts/src/_includes/**/*.js', 
                    'app/scripts/src/**/*.js',                    
    				'node_modules/wowjs/dist/wow.min.js',
    				'node_modules/angular-route/angular-route.min.js',
    				'node_modules/angular-input-masks/releases/angular-input-masks-standalone.js',
                    'node_modules/angular-i18n/angular-locale_pt-br.js',
    				'node_modules/alertifyjs/build/alertify.js'
    			])
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber())
                //this is the filename of the compressed version of our JS
                .pipe(concat('app.js'))
                //catch errors
                .on('error', gutil.log)
                //where we will store our finalized, compressed script
                .pipe(gulp.dest('app/scripts'))
                //notify browserSync to refresh
                .pipe(browserSync.reload({stream: true}));
});

//compiling our Javascripts for deployment
gulp.task('scripts-deploy', function() {
    //this is where our dev JS scripts are
    return gulp.src([
                    'app/scripts/app.js'
                ])
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber())
                //this is the filename of the compressed version of our JS
                //.pipe(concat('app.js'))
                //compress :D
                //.pipe(uglify())
                //where we will store our finalized, compressed script
                .pipe(gulp.dest(diretorioDist+'/scripts'));
});


//compiling our SCSS files
gulp.task('styles', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src([
                    'app/styles/scss/pages/*.css',
    				'app/styles/scss/init.scss',
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
                    'node_modules/ui-select/dist/select.min.css',
    				'node_modules/hover.css/css/hover-min.css',
    				'node_modules/font-awesome/css/font-awesome.min.css',
                    'node_modules/alertifyjs/build/css/alertify.css',
                    'node_modules/alertifyjs/build/css/themes/bootstrap.css'

    			])
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber({
                  errorHandler: function (err) {
                    console.log(err);
                    this.emit('end');
                  }
                }))
                //get sourceMaps ready
                .pipe(sourceMaps.init())
                //include SCSS and list every "include" folder
                .pipe(sass({
                      errLogToConsole: true,
                      includePaths: [
                          'app/styles/scss/'                          
                      ]
                }))
                .pipe(autoprefixer({
                   browsers: autoPrefixBrowserList,
                   cascade:  true
                }))
                //catch errors
                .on('error', gutil.log)
                //the final filename of our combined css file
                .pipe(concat('styles.css'))
                //get our sources via sourceMaps
                .pipe(sourceMaps.write())
                //where to save our final, compressed css file
                .pipe(gulp.dest('app/styles'))
                //notify browserSync to refresh
                .pipe(browserSync.reload({stream: true}));
});

//compiling our SCSS files for deployment
gulp.task('styles-deploy', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src('app/styles/scss/init.scss')
                .pipe(plumber())
                //include SCSS includes folder
                .pipe(sass({
                      includePaths: [
                          'app/styles/scss',
                      ]
                }))
                .pipe(autoprefixer({
                  browsers: autoPrefixBrowserList,
                  cascade:  true
                }))
                //the final filename of our combined css file
                .pipe(concat('styles.css'))
                .pipe(minifyCSS({processImport: false}))
                //where to save our final, compressed css file
                .pipe(gulp.dest(diretorioDist+'/styles'));
});

//basically just keeping an eye on all HTML files
gulp.task('html', function() {
    //watch any and all HTML files and refresh when something changes
    return gulp.src(['app/*.html'])
        .pipe(plumber())
        .pipe(browserSync.reload({stream: true}))
        //catch errors
        .on('error', gutil.log);
});

gulp.task('fonts', function() {
    //grab everything, which should include htaccess, robots, etc
   gulp.src([
   			'node_modules/font-awesome/fonts',
   			'node_modules/bootstrap/fonts'
   	])
    //prevent pipe breaking caused by errors from gulp plugins
    .pipe(plumber())
    .pipe(gulp.dest('app/fonts'));
});

//migrating over all HTML files for deployment
gulp.task('html-deploy', function() {
    //grab everything, which should include htaccess, robots, etc
    gulp.src('app/*')
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest(diretorioDist+''));

    //grab any hidden files too
    gulp.src('app/.*')
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest(diretorioDist+''));

    gulp.src('app/fonts/**/*')
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest(diretorioDist+'/fonts'));

    //grab all of the styles
    gulp.src(['app/styles/styles.css'])
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest(diretorioDist+'/styles'));
});

//cleans our dist directory in case things got deleted
gulp.task('clean', function() {
    return shell.task([
      'rm -rf dist'
    ]);
});

//create folders using shell
gulp.task('scaffold', function() {
  return shell.task([
      'mkdir dist',
      'mkdir dist/fonts',
      'mkdir dist/images',
      'mkdir dist/scripts',
      'mkdir dist/styles'
    ]
  );
});

//this is our master task when you run `gulp` in CLI / Terminal
//this is the main watcher to use when in active development
//  this will:
//  startup the web server,
//  start up browserSync
//  compress all scripts and SCSS files
gulp.task('default', ['browserSync', 'scripts', 'styles'], function() {
    //a list of watchers, so it will watch all of the following files waiting for changes
    gulp.watch('app/scripts/src/**', ['scripts']);   
    
    gulp.watch('app/styles/scss/**', ['styles']);    
    gulp.watch('app/images/**', ['images']);
    
    gulp.watch(['app/*.html'], ['html','fonts']);
    
    connect.server();
});

//this is our deployment task, it will set everything for deployment-ready files
gulp.task('deploy', gulpSequence('clean', 'scaffold', ['scripts-deploy', 'styles-deploy', 'images-deploy'], 'html-deploy'));


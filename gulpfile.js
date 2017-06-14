let gulp = require("gulp");
let ts = require("gulp-typescript");
let tsProject = ts.createProject("tsconfig.json");

//gulp create dir
gulp.task("create dist dir", function () {
  gulp.src()
    .pipe(gulp.dest('./build/templates'))
    .pipe(gulp.dest('./build/minified_templates'));
});

// gulp build and create dir
gulp.task("build-code", function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("build"));
});

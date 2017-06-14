let gulp = require("gulp");
let ts = require("gulp-typescript");
let tsProject = ts.createProject("tsconfig.json");

// gulp build and create dirs
gulp.task("build-code", function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("build"));
});

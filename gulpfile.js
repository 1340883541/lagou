var gulp=require("gulp"),
   mincss=require("gulp-clean-css"),
   minjs=require("gulp-uglify");
//创建css压缩任务
gulp.task("mincss",function(){
	gulp.src("css/*.css")
	     .pipe(mincss())
	     .pipe(gulp.dest("dist/css"));
});  

gulp.task("minjs",function(){
	gulp.src("js/*.js")
	     .pipe(minjs())
	     .pipe(gulp.dest("dist/js"));
}); 

gulp.task("watch",function(){
	gulp.watch("css/*.css",[mincss]);
})   
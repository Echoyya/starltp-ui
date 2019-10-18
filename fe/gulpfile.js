const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const spritesmith = require('gulp.spritesmith')

gulp.task('imgzip', function() {
    // 图片不失真压缩处理
    gulp.src('static/**/*.*')
        .pipe(
            imagemin({
                // optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
                progressive: true, // 类型：Boolean 默认：false 无损压缩jpg图片
                svgoPlugins: [
                    {
                        removeViewBox: false
                    }
                ], // 不要移除svg的viewbox属性
                use: [pngquant()] // 使用pngquant深度压缩png图片的imagemin插件
            })
        )
        .pipe(gulp.dest('static/'))
})
// 合并图表
gulp.task('sprite', function() {
    const spriteData = gulp.src('static/language/*.png').pipe(
        spritesmith({
            padding: 4,
            imgName: 'language.png',
            // imgPath: cfg.src.img,
            cssName: 'language.less',
            cssTemplate: 'less.template.sprite', // 模板
            cssFormat: 'less' // 输出格式
        })
    )
    spriteData.img.pipe(gulp.dest('static/'))
    spriteData.css.pipe(gulp.dest('components/'))
})

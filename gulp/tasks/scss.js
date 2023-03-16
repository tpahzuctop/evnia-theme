            import dartSass from "sass";
            import gulpSass from "gulp-sass";
            import rename from "gulp-rename";

            import cleanCss from "gulp-clean-css";
            import webpcss from "gulp-webpcss";
            import autoprefixer from "gulp-autoprefixer";
            import groupCssMediaQuaries from "gulp-group-css-media-queries";

            const sass = gulpSass(dartSass);

            export const scss = () => {
                return app.gulp.src(app.path.src.scss, { sourcemaps: true })
                    .pipe(app.plugins.plumber(
                        app.plugins.notify.onError({
                            title: "SCSS",
                            message: "Error: <% error.message %>"
                        }))
                    )
                    .pipe(app.plugins.replace(/@img\//g, '../img/'))
                    .pipe(sass({
                        outputStyle: "expanded",
                    }))
                    .pipe(groupCssMediaQuaries())
                    .pipe(webpcss({
                        webpClass: ".webp",
                        noWebpClass: ".no-webp"
                    }))
                    .pipe(autoprefixer({
                        grid: true,
                        flexbox: true,
                        overrideBrowserslist: ['last 15 versions and not dead, Firefox > 51, Chrome > 84, Edge > 84, Opera > 70, Safari > 14.1, iOS > 10'],
                    }))
                    .pipe(app.gulp.dest(app.path.build.css))
                    .pipe(cleanCss({ level: { 1: { specialComments: 0 } } }))
                    .pipe(rename({
                        extname: ".min.css"
                    }))
                    .pipe(app.gulp.dest(app.path.build.css))
                    .pipe(app.plugins.browsersync.stream());
            }
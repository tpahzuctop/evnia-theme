export const webasystSiteCss = () => {
    return app.gulp.src(app.path.src.webasyst_evnia_css)
        .pipe(app.gulp.dest(app.path.build.webasyst_evnia_css))
}

export const webasystSiteJs = () => {
    return app.gulp.src(app.path.src.webasyst_evnia_js)
        .pipe(app.gulp.dest(app.path.build.webasyst_evnia_js))
}

export const webasystSiteFonts = () => {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.webasyst_evnia_fonts))
}
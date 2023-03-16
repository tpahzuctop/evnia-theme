export const webasystSiteCss = () => {
    return app.gulp.src(app.path.src.webasyst_site_css)
        .pipe(app.gulp.dest(app.path.build.webasyst_site_css))
}

export const webasystSiteJs = () => {
    return app.gulp.src(app.path.src.webasyst_site_js)
        .pipe(app.gulp.dest(app.path.build.webasyst_site_js))
}

export const webasystSiteFonts = () => {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.webasyst_site_fonts))
}
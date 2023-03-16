import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        fonts: `${srcFolder}/fonts`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        webasyst_site_css: `${srcFolder}/webasyst/site/themes/evnia/css/`,
        webasyst_site_js: `${srcFolder}/webasyst/site/themes/evnia/js/`,
        webasyst_site_fonts: `${srcFolder}/webasyst/site/themes/evnia/fonts/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/*.scss`,
        js: `${srcFolder}/js/app.js`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/**/*.*`,
        svgicons: `${srcFolder}/img/svgicons/*.svg`,
        fonts: `${srcFolder}/fonts/**/*.*`,
        webasyst_site_js: `${buildFolder}/js/**/*.*`,
        webasyst_site_css: `${buildFolder}/css/**/*.*`,
        webasyst_blog: `${srcFolder}/webasyst/blog/**/*.*`,
        webasyst_shop: `${srcFolder}/webasyst/shop/**/*.*`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
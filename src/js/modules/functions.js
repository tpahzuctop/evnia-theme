import Swiper from 'swiper';

export function isWebp() {
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        }
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function scrollBgEffect(BgItem) {
    document.addEventListener('scroll', () => {
        const elem = document.querySelectorAll(BgItem);
        const startPoint = Math.round(window.innerHeight*0.75);
        const middlePoint = Math.round(window.innerHeight*0.50);
        const lastPoint = Math.round(window.innerHeight*0.25);
        elem.forEach(item => {
            let rect = item.getBoundingClientRect();
            if( Math.round(rect.y) < startPoint) {
                item.style.transform = "scale(1.1)"
            }
            if( Math.round(rect.y) < middlePoint) {
                item.style.transform = "scale(1.3)"
            }
            if( Math.round(rect.y) < lastPoint) {
                item.style.transform = "scale(1.45)"
            }
        })
    });
}

export function compareSliders() {
    let swiperCompareName = new Swiper(".swiper-compare-name", {
        on: {
            reachEnd: function () {
                console.log('swiper-compare-name end');
            },
        },
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-compare-name-next',
            prevEl: '.swiper-compare-name-prev',
        },
        pagination: false,
        a11y: false,
        slidesPerView: 1,
        initialSlide : 1,
        breakpoints: {
            1050: {
                slidesPerView: 1,
            },
            1250: {
                slidesPerView: 1,
            },
            1550: {
                slidesPerView: 2,
            },
            1850: {
                slidesPerView: 3,
            },
            2150: {
                slidesPerView: 4,
            },
        },
    });

    let swiperCompareOneProduct = new Swiper(".swiper-compare-one-product", {
        allowTouchMove: false,
        direction: 'horizontal',
        loop: false,
        navigation: false,
        pagination: false,
        a11y: false,
        slidesPerView: 1,
    });

    let swiperCompareOneProductName = new Swiper(".swiper-compare-one-product-name", {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-compare-one-product-name-next',
            prevEl: '.swiper-compare-one-product-name-prev',
        },
        pagination: false,
        a11y: false,
        slidesPerView: 1,
    });

    window.addEventListener("DOMContentLoaded", onScrollCompareHead);

    function onScrollCompareHead() {
            window.addEventListener('scroll', onWindowScroll)
            var menu = document.getElementById('compare-head');

            function onWindowScroll() {
                if (menu !== null) {
                    if (window.document.scrollingElement.scrollTop > 600) {
                        menu.classList.add("fixed");
                    } else {
                        menu.classList.remove("fixed")
                    }
                }
            }
            console.log(menu);
    }

    //window.addEventListener('DOMContentLoaded', compareCheck);
    window.addEventListener('DOMContentLoaded', swiperCompareName);
    window.addEventListener('DOMContentLoaded', swiperCompareOneProduct);
}

let prevArrow = document.querySelectorAll('.prev');
let nextArrow = document.querySelectorAll('.next');
let sliderPagination = document.querySelectorAll('.pagination-slider');

export function productSliderMainPage() {
    const productsSlider = () => {
        let productsSliders = document.querySelectorAll('.slider__container');
        productsSliders.forEach((slider, index) => {
            let sliderLength = slider.children[0].children.length;
            let result = (sliderLength > 1) ? true : false;
            const swiper = new Swiper(slider, {
                direction: 'horizontal',
                loop: result,
                centeredSlides: false,
                pagination: {
                    el: sliderPagination[index],
                    type: 'bullets',
                    clickable: true,
                },
                navigation: {
                    // the 'index' bit below is just the order of the class in the queryselectorAll array, so the first one would be NextArrow[0] etc
                    nextEl: nextArrow[index],
                    prevEl: prevArrow[index],
                },
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
                breakpoints: {
                    1050: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16,
                    },
                    1250: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 16,
                    },
                    1550: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        spaceBetween: 16,
                    },
                    1850: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        spaceBetween: 32
                    }
                },
                speed: 1000,
            });
        })
    }

    window.addEventListener('DOMContentLoaded', productsSlider);
}

//check classes reviews
export function checkStreamSlider() {
    let swiperReviews = document.querySelector(".customer-reviews");
    let swiperWrapperItems = document.querySelector(".s-reviews-list");
    let addClassItem = document.querySelectorAll(".s-review-item");
    addClassItem.forEach((reviewItem) => {
        reviewItem.classList.add("swiper-slide");
    });
    swiperReviews.classList.add("swiper");
    swiperWrapperItems.classList.add("swiper-wrapper");
}
window.addEventListener('DOMContentLoaded', checkStreamSlider);

//stream-reviews slider
export function reviewsStreamSlider() {

    let reviewsSlider = new Swiper(".customer-reviews-list", {
        direction: 'horizontal',
        loop: false,
        centeredSlides: false,
        mousewheel: true,
        spaceBetween: 16,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            425: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            525: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            925: {
                slidesPerView: 3
            },
            1050: {
                slidesPerView: 2
            },
            1250: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1550: {
                slidesPerView: 3,
                slidesPerGroup: 2
            },
            1850: {
                slidesPerView: 4,
                slidesPerGroup: 3
            }
        },
        speed: 2000,
    });
}

window.addEventListener('DOMContentLoaded', reviewsStreamSlider);

export function promoSlider() {
    let swiperPromo = new Swiper(".slider__promos", {
        loop: true,
        centeredSlides: true,
        parallax: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            renderCustom: 'current',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
export function gallerySlider() {
let swiperGallery = new Swiper(".gallery", {
    loop: true,
    centeredSlides: true,
    parallax: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 1,
    slidesPerView: 1,
    roundLengths: true,
    loopAdditionalSlides: 10,
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1050: {
            slidesPerView: 3
        }
    }
});
}

export function benefitsSlider() {
    let swiperBenefits = new Swiper(".swiper-benefits", {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2200,
        },
    });
}
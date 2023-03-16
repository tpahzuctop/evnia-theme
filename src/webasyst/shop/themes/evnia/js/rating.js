const ratingStars = [...document.getElementsByClassName("rating-star")];
const ratingResult = document.querySelector(".rating-result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
    const starClassActive = "rating-star star-active";
    const starClassUnactive = "rating-star star-empty";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className.indexOf(starClassUnactive) !== -1) {
                printRatingResult(result, i + 1);
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                printRatingResult(result, i);
                for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
            }
        };
    });
}

function printRatingResult(result, num = 0) {
    result.value = `${num}`;
}

executeRating(ratingStars, ratingResult);

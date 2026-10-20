javascript
// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function () {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("mobile-open");

});


// ================================
// CONTACT FORM
// ================================

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    message.textContent =
        "Thank you! Your message has been received.";

    form.reset();

});


// ================================
// NAVBAR EFFECT
// ================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(31, 54, 55, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";

    }

});

// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        const nav = document.querySelector(".nav-links");

        nav.classList.toggle("mobile-open");

    });

}


// ================================
// NAVBAR EFFECT
// ================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(31, 54, 55, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";

    }

});


// ================================
// STAR RATING
// ================================

const starButtons = document.querySelectorAll(".stars-input button");
const ratingInput = document.getElementById("rating");

starButtons.forEach(function (star) {

    star.addEventListener("click", function () {

        const rating = this.dataset.rating;

        ratingInput.value = rating;

        starButtons.forEach(function (otherStar) {

            if (otherStar.dataset.rating <= rating) {
                otherStar.classList.add("selected");
            } else {
                otherStar.classList.remove("selected");
            }

        });

    });

});


// ================================
// REVIEW FORM
// ================================

const reviewForm = document.getElementById("reviewForm");
const reviewMessage = document.getElementById("reviewMessage");

if (reviewForm) {

    reviewForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const rating = ratingInput.value;

        if (rating === "0") {

            reviewMessage.textContent =
                "Please select a star rating.";

            return;
        }


        /*
        IMPORTANT:

        This currently only demonstrates the form.
        It does NOT save the review anywhere yet.

        Later, we can connect this form to:
        - Email
        - Google Sheets
        - Firebase
        - Supabase
        - Your own database
        */


        reviewMessage.textContent =
            "Thank you for sharing your experience!";

        reviewForm.reset();

        ratingInput.value = "0";

        starButtons.forEach(function (star) {
            star.classList.remove("selected");
        });

    });

}

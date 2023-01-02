const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
})

window.addEventListener("scroll", () => {
    console.log("s")
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
})

// theme colors
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}

// day night

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector('i').classList.toggle("fa-sun");
    dayNight.querySelector('i').classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector('i').classList.replace("fa-moon", "fa-sun");
    } else {
        dayNight.querySelector('i').classList.replace("fa-sun", "fa-moon");
    }
})
// typing animations

var typed = new Typed('.typing', {
    strings: ["", "Designer", "Developer", "Writer", "Freelancer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


// Aside

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let j = 0; j < totalNavList; j++) {
        allSection[j].classList.remove("back-section");
    }
}

function addBackSection(j) {
    allSection[j].classList.add("back-section");
}

function showSection(element) {
    for (let j = 0; j < totalNavList; j++) {
        allSection[j].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    // console.log(target)
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    // console.log(element)
    for (let j = 0; j < totalNavList; j++) {
        navList[j].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        // console.log(target)
        if (target === navList[j].querySelector("a").getAttribute("href").split("#")[1]) {
            // console.log("matched")
            navList[j].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let j = 0; j < totalNavList; j++) {
        allSection[j].classList.toggle("open");
    }
}

document.querySelector(".age").innerHTML= new Date().getFullYear()-2002;


// Form

// document.querySelector(".form").addEventListener("submit", (e) => {
//     // e.preventDefault();
// })

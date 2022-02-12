let navbar = document.querySelector(".header .navbar");
document.querySelector('#menu-btn').addEventListener("click", function (e) {
    e.preventDefault
    navbar.classList.add("active");
});
document.querySelector('#close').addEventListener("click", function (e) {
    e.preventDefault()
    navbar.classList.remove("active");
});

let searchForm = document.querySelector(".search-form");
document.querySelector('#search').addEventListener("click", function (e) {
    e.preventDefault()
    searchForm.classList.add("active");
});
document.querySelector('#close-form').addEventListener("click", function () {
    searchForm.classList.remove("active");
});


let flag = 0;
function controller(x) {
    flag = flag + x;
    slideshow(flag);


}


function slideshow(num) {
    let slides = document.querySelectorAll(".slider-box .slide");


    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = "none";

    }
    slides[num].style.display = "block";


}
slideshow(flag);

window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add('active');
    } else {
        document.querySelector(".header").classList.remove('active');
    }
};
window.onload = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add('active');
    } else {
        document.querySelector(".header").classList.remove('active');
    }
};


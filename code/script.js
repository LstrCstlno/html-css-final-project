let slide = document.querySelectorAll(".slide")
let slideIndex = 0;
showSlide();

function showSlide() {
    slide.forEach(slide => slide.style.display = "none");
    if(slideIndex>=slide.length){
        slideIndex = 0;
    }else if(slideIndex<0){
        slideIndex = slide.length;
    }
    slideIndex++;
    slide[slideIndex-1].style.display = "block";
    setTimeout(showSlide, 3000);
}

let items = document.querySelectorAll(".menu-btn");
let menu = document.querySelectorAll(".menu-slide");
let button = document.querySelectorAll("[data-btn]")
let menuContainer = document.querySelector(".menu-btn-container")
let ham = document.querySelector(".hamburger")
let x = document.querySelector(".close")
let overlay = document.querySelector(".overlay")

showBaseMenu();

function showBaseMenu(event) {
    menu.forEach(item => {
        item.style.display = "none";
        if (item.classList.contains("active")) {
            item.style.display = "flex";
        }
    })
}

function showMenu(event) {
    menu.forEach(item => {
        item.classList.remove("active")
    })
    button.forEach(item => {
        item.style.color = "white"
    })
    let active = event.target.dataset.btn;
    menu[active-1].classList.add("active");
    button[active-1].style.color = "red";
    console.dir(event.target);
    showBaseMenu();
}

function open() {
    overlay.style.width = "100%"
}

function close() {
    overlay.style.width = "0"
}

menuContainer.addEventListener("click", showMenu)



ham.addEventListener("click", open);
x.addEventListener("click", close);
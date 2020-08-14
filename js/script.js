const hmb = document.querySelector(".hmb");
const menu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const container = document.querySelector("header > .container");
const logo = document.querySelector(".header-logo");
let clickBtn = true;

hmb.addEventListener("click", function () {
    if (clickBtn == true) {
        hmb.classList.toggle("hmb-close");
        menu.style.animationName = "menu-down";
        menu.style.display = "";
        clickBtn = false;
    }
    else {
        hmb.classList.toggle("hmb-close");
        menu.style.animationName = "menu-up";
        let time = setTimeout(function () {
            menu.style.display = "none";
        }, 500);
        clickBtn = true;
    }
})


const mobile = window.matchMedia("screen and (max-width: 1000px)");

function showMenu(mobile) {
    if (mobile.matches) {
        hmb.style.display = "";
        menu.style.display = "none";
    } else {
        menu.style.display = "";
        hmb.style.display = "none";
        window.onscroll = function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                header.style.height = "50px";
                container.style.height = "50px";
                logo.style.fontSize = "1.7em";
            }
            else {
                header.style.height = "70px";
                container.style.height = "70px";
                logo.style.fontSize = "2em";
            }
        }
    }
}

showMenu(mobile);
mobile.addListener(showMenu);
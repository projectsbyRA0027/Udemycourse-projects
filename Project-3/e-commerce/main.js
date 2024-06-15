'use strict';

// navbar toggle

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElms = [overlay,navCloseBtn,navCloseBtn];

for(let i=0;i<navElms.length;i++){
    navElms[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

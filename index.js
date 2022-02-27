let navbarHeight = document.querySelector('.Navbar').offsetHeight;

/* document.querySelector('.Header').style.paddingTop = `${navbarHeight}px`; */

vh100 = window.innerHeight;
document.querySelector('.Header').style.minHeight = `${vh100 - navbarHeight}px`;

let header_up_menu = document.querySelector('#header-up-menu');
let all_closer = document.querySelector('#all-closer');
var btn = document.querySelector('.hambutton');
let s = 0;
btn.addEventListener('click', function () {
    s = s + 1;
    if (s === 1) {
        btn.classList.remove('not-active');
        btn.classList.add('active');
        header_up_menu.classList.add('active-menu');
        all_closer.style.display = "flex";
    } else {

    }
});
header_up_menu.style.top = `${navbarHeight - 1}px`;
header_up_menu.style.height = `${vh100 - navbarHeight + 1}px`;

all_closer.addEventListener('click', function () {
    btn.classList.remove('active');
    btn.classList.add('not-active');
    header_up_menu.classList.remove('active-menu');
    s = 0;
    all_closer.style.display = "none";
});

document.addEventListener('DOMContentLoaded', function() {
    header_up_menu.classList.add('d-block');
 }, false);

 window.onload = function() {
     document.querySelector("#loading").display="flex"
 }


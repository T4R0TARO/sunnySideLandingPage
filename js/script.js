// console.log('wah');

// NAV VARIABLES
const nav = document.querySelector(".navbar__nav");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelectorAll(".nav-links");
const main  = document.querySelector("main");

//NAV BAR TOGGLE FUNCTION 
const navToggleFunc = function(){
    nav.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
}

navToggleBtn.addEventListener('click', navToggleFunc);

// CLICK OUT OF NAV/ CLOSE NAV
const outsideDivClose = function(){
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }
    console.log(nav.classList)
}

main.addEventListener('click', outsideDivClose);


// for(let i = 0; i < navLinks.length; i++){
//     navLinks[i].addEventListener('click', navToggleFunc);
// }
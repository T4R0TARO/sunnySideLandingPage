// console.log('wah');

// NAV VARIABLES
const nav = document.querySelector(".navbar__nav");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelectorAll(".nav-links");

//NAV BAR TOGGLE FUNCTION 
const navToggleFunc = function(){
    nav.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
}

navToggleBtn.addEventListener('click', navToggleFunc);



// TODO: If clicked outside nav, close nav

// const outsideDivClose = function(){
//     if( nav.classList ===  'active'){
//         nav.classList.remove('active');
//     }
// }

// document.addEventListener('click', outsideDivClose);


// for(let i = 0; i < navLinks.length; i++){
//     navLinks[i].addEventListener('click', navToggleFunc);
// }
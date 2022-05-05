# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot


### Links

- Solution URL: [Git Repo](https://github.com/T4R0TARO/sunnySideLandingPage)
- Live Site URL: [Git Pages](https://t4r0taro.github.io/sunnySideLandingPage/)

## My process

### Built with

- Semantic HTML5 markup
- SASS/SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
    <section class="home">

      <picture>

        <source media="(max-width: 768px)" srcset="./images/mobile/image-header.jpg">
        <source media="(min-width: 769px)" srcset="./images/desktop/image-header.jpg">

        <img src="./images/mobile/image-header.jpg" alt="home hero image" class="home-banner" loading="lazy">
      
      </picture>

      <div class="home-absolute-content">
        <h1 class="main-heading">We are creative</h1>
        
        <a href="#about">
          <img src="./images/icon-arrow-down.svg" alt="icon-arrow-down" class="arrow-down" loading="lazy">
        </a>
      </div>

    </section>
```
 html tag <source> can be used responsively when setting images by media="()" and setting the minmax width

```css
.arrow-down {
  display: inline-block;
  animation: jump-down 2s ease infinite;
}

@keyframes jump-down {

  0%,
  50%,
  100% {transform: translateY(0);}

  12.5%,
  37.5% {transform: translateY(20px);}

  25% {transform: translateY(10px);}
}

```

css animation moves img transform:translateY to move it vertically 


### Continued development


## Author

- Website - [Joshua Manansala](https://github.com/T4R0TARO)
- Frontend Mentor - [@T4R0TARO](https://www.frontendmentor.io/profile/T4R0TARO)
- Twitter - [@taro_code](https://twitter.com/taro_code)


# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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
DESKTOP:
![image](https://user-images.githubusercontent.com/76195521/167039789-35d8663b-9a04-42ea-8a33-c76689fb5dc4.png)
MOBILE:
![image](https://user-images.githubusercontent.com/76195521/167040094-21a3c99b-1808-4d6f-aa1d-bf45de2c9d5f.png)
MOBILE/MENU:
![image](https://user-images.githubusercontent.com/76195521/167040402-e24ebe44-e82c-4c92-99d0-41f271989af6.png)

### Links

- Solution URL: [Git Repo](https://github.com/T4R0TARO/sunnySideLandingPage)
- Live Site URL: [Git Pages](https://t4r0taro.github.io/sunnySideLandingPage/)

## My process
Usually I start off by completing the HTML Layout then move on to the styles. I approached this project by section, started with a section of HTML then style that section and move on to the next section. Responsive styles were implemented at the end.
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
@keyframes: controls the intermediate steps in a CSS animation
The percentage represents the time through the animation sequence when the 
specified keyframes should occur

css animation moves img transform:translateY to move it vertically 

## Author

- Website - [Joshua Manansala](https://github.com/T4R0TARO)
- Frontend Mentor - [@T4R0TARO](https://www.frontendmentor.io/profile/T4R0TARO)
- Twitter - [@taro_code](https://twitter.com/taro_code)


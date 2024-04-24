# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Screenshot 2024-04-24 181845](https://github.com/SushantLimbu/Social-Media-Dashboard/assets/152957532/c3ad30d9-88e1-4c80-b55c-40b4fdb377e5)

![Screenshot 2024-04-24 181902](https://github.com/SushantLimbu/Social-Media-Dashboard/assets/152957532/c08f4b4e-ed2f-4309-8f66-1848e7ba6697)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- scss
- javascript
- gulpfile


### What I learned

```html
<div class="header__title">
      <h1>Social Media Dashboard</h1>
      <span class="header__subtitle">Total Followers: 23,004</span>
    </div>
```
```css
html {
 font-size: 100%;
 box-sizing: border-box;
}
```
```js
function setDarkMode() {
 document.querySelector('body').classList = "dark";
 localStorage.setItem('colorMode', 'dark');
}
```

### Continued development

I want to focus more in the aspect such as the gulpfile, gitfiles & attributes and various node modules installed during the projects which were very new to me. I am also interested to further develop this project into more real world and user applicable then it is now which even I can use in my day to day life. 

### Useful resources

- [[Example resource 1](https://www.example.com)](https://www.youtube.com/@TheCoderCoder) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

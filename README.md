# Frontend Mentor - Newsletter sign-up form with success message solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
The technologies used to meet this challenge are HTML, TailwindCSS and Jquery.

### The challenge
 Newsletter sign-up form with success message solution

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## My process
Once the user opens this URL, they will be able to see the stay tuned page. This page will be responsive according to mobile and desktop size, once user enter their email they can see the thank you page. I did empty validation and email format validation. if user did not enter their email correctly they will see an error. Once they get the success message, they can come to the default state by clicking on dismis button.

### What I learned

During this challenge I learnt how to use tailwindcss in our project and how to make animations using tailwindcss. In this challenge I learnt that we can add svg as src tag for image element. And how to configure custom colour using tamilwind.

```js
 tailwind.config = {
           theme: {
             extend: {
               listStyleImage: {
             checkmark: 'url("./assets/images/icon-list.svg")',
           },
           transitionProperty: {
              'width': 'width',
             },
               colors: {
                 clifford: '#36394c',
                 tomato:'#FF6257'
               }
             }
           }
         }
```

## Author

- Github - [Manikandan B](https://github.com/nameismani)
- Frontend Mentor - [Manikandan B](https://www.frontendmentor.io/home)



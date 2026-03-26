# Frontend Mentor - Interactive rating component solution

This is my **React** solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

*Note: I originally created this project in Vanilla JS and then completely refactored it to React to practice working with components and hooks.*

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

In this version, I focused on the transition from manual handling of the DOM to declarative programming in React.
Users should be able to:

- Choose a review (1-5)
- Send rating by clicking on "Submit" (with protection against empty selection)
- See "Thank you" tab with the selected number displayed
- Go back to the selection via the "Thank You" button (Reset status)

### Screenshot

![Screenshot of the Solution](/public/Screenshot.png)

### Links

- Solution URL: [Github Repository](https://github.com/Saliva-sys/Interactive-rating-react.git)
- Live Site URL: [Live URL](https://saliva-sys.github.io/Interactive-rating-react/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- Flexbox & Responsive design (Clamp function)
- [React](https://reactjs.org/) - JS Library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- Mobile-first workflow

### What I learned

The main benefit of this project was understanding how React "thinks" through states. I no longer need to look for elements in HTML, just adjust the data in the "box" (state) and React itself repaints what needs to be done.

*1. State Management (useState)*
I learned how to use hook `useState` to track user selection and to switch between two screens (Rating vs. Thank You).
```jsx
const [isRating, setIsRating] = useState(null); 
const [isSubmit, setIsSubmit] = useState(false); 
```
*2. Array Mapping*
Instead of manually writing five buttons, I used the .map() method. This makes the code cleaner and easier to maintain.

```js
{number.map((number) => (
    <button 
        key={number} 
        onClick={() => setIsRating(number)}>{number}
    </button>
))}
```
*3. Conditional Classes*
I learned how to dynamically add a CSS class (e.g. .active) based on the current status:

```js
className={`btn ${isRating === number ? 'active' : ''}`}
```

*4. Data Protection (Validation)*
I have implemented a simple logic that prevents blank evaluation from being sent using the alert() window if the state is null.

```js
else {
    alert("Please select a rating before submission!") 
}
```

### Continued development

In the next steps, I want to focus on:

- Components partition: Break one large file into smaller (e.g. RatingCard.jsx and ThankYouCard.jsx).   
- Framer Motion: Add fine animations when switching between cards.
- Tailwind CSS: Try styling using a utility-first framework within React.

### Useful resources

- [Variable Fonts Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts) - This guide helped me understand how to implement the Work Sans variable font and control font weights dynamically.
- [BEM Methodology](https://getbem.com/) - Using BEM helped me keep my CSS organized and avoid naming conflicts, which is crucial for larger projects.
- [Clamp Generator](https://clampgenerator.com/) – This tool was essential for calculating fluid values for my layout, allowing the design to scale perfectly between mobile and desktop.
- [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – This is my go-to reference for Flexbox. It helped me perfectly align the icons and headings within the accordion buttons.

### AI Collaboration

This project was created in intensive cooperation with the AI Assistant (Gemini).

- Refactoring: AI has helped me understand the difference between importing React and direct importing hooks.
- Debugging: Together we solved the mystery of the paths to the pictures in Vita (importing assets vs. public folder).
- Best Practices: AI guided me when using semantic tags like <main> and name conditions correctly.

## Author

- Frontend Mentor - [@Saliva-sys](https://www.frontendmentor.io/profile/Saliva-sys)
- GitHub - [Saliva-sys](https://github.com/Saliva-sys)

## Acknowledgments

I would like to thank the Frontend Mentor community for providing such great challenges to practice real-world web development skills.

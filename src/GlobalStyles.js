import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap'); */

:root {
  --font-family: 'Manrope', sans-serif;
  /* --font-family: 'Neonderthaw', cursive; */
  
  

  --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
  --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
  
  --color-bg: #040C18;
  --color-footer : #031B34;
  --color-blog: #042c54;
  --color-text: #81AFDD;
  --color-subtext: #FF8A71;
   
}
 
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* font-family: 'Courier New', Courier, monospace; */
  font-family: var(--font-family);

}


/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: var(--color-bg);
  color: var(--color-text);

}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  text-decoration: none;
  color: unset;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
a,
select {
  font: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.gradient__bg {
  background:-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* safari 5.1+,chrome 10+ */
  background:-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* opera 11.10+ */
  background:-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* ie 10+ */
  background:-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* global 92%+ browsers support */
  background:radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
  /* background-size: cover;
  background-position: center */
}

`;


export const Container = styled.div`
  max-width: 1200px;
  margin:0 auto;
  padding-inline: clamp(.5rem, 5vw, 2.3rem);
`
const scaleAnimation = keyframes`
    0% {transform: scale(1)}
    100% {transform: scale(1.5)}
    
`
export const Section = styled.div`
  padding: 4rem 6rem;
  margin: 4rem 6rem;

  @media (max-width: 700px){
    padding: 4rem;
    margin: 4rem;
  }
  @media (max-width: 550px){
    padding: 4rem 2rem;
    margin: 4rem 2rem;
  }

`
export const Button = styled.button`

  display: inline-block;
  outline: none;
  cursor: pointer;
  border: none;
  font-weight: 500;
  line-height: 1;
  font-size: 0.9rem;
  background: transparent;
  color: #fff;

`

export const GradientText = styled.h1`
    background :var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* animation: ${scaleAnimation} 2s ease infinite alternate-reverse; */
`


export const GradientBg = styled.div`
  background:-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* safari 5.1+,chrome 10+ */
  background:-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* opera 11.10+ */
  background:-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* ie 10+ */
  background:-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* global 92%+ browsers support */
  background:radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
  /* background-size: cover;
  background-position: center */
`
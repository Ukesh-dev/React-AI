import React from 'react';
import { Helmet } from 'react-helmet-async';
import { InView } from "react-intersection-observer"
import { GlobalStyles, GradientBg } from './GlobalStyles';
import { Brand, Cta, Navbar, Article, Footer } from './components'
import { Features, Hero } from './containers';
import Possiblility from './containers/possibility/Possiblility';
import { useState } from 'react';


function App() {
  const [pageHeight, setPageHeight] = useState(100);
  const [activeCharacter, setActiveCharacter] = useState("");
  React.useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener('resize', (e) => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);
  const observerMargin = Math.floor(pageHeight / 2);
  return (
    <div className="App">
      <Helmet>
        {/* <meta charSet='utf-8' /> */}
        <title>GPT-3</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&family=Neonderthaw&display=swap" rel="stylesheet" />

      </Helmet>
      <GlobalStyles />
      <GradientBg>
        <Navbar activeCharacter={activeCharacter} />
        <InView >
          {({ ref, inView }) => (
            <Hero ref={ref} inView={inView} activeCharacter={activeCharacter} id="home" setActiveCharacter={setActiveCharacter} />
          )}
        </InView>
      </GradientBg>

      <Brand></Brand>
      <InView threshold={0.5} rootMargin="-50px">
        {({ ref, inView }) => (
          <Features id="GPT3" ref={ref} inView={inView} activeCharacter={activeCharacter} setActiveCharacter={setActiveCharacter} />
        )}
      </InView>
      <Possiblility setActiveCharacter={setActiveCharacter} id="openAi" />
      <Cta />
      <Article activeCharacter={activeCharacter} setActiveCharacter={setActiveCharacter} id="caseStudies" pageHeight={pageHeight} observerMargin={observerMargin} />
      <Footer setActiveCharacter={setActiveCharacter} id="library" />


    </div>
  );

}

export default App;

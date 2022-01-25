import { Helmet } from 'react-helmet-async';
import { GlobalStyles, GradientText, GradientBg } from './GlobalStyles';
import { Brand, Cta, Navbar } from './components'
import { Footer, Blog, Features, Header, Hero } from './containers';

function App() {
  return (
    <div className="App">
      <Helmet>
        {/* <meta charSet='utf-8' /> */}
        <title>React Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&family=Neonderthaw&display=swap" rel="stylesheet" />

      </Helmet>
      <GlobalStyles />
      <GradientBg>
        <Navbar />
        <Hero />
      </GradientBg>
      <Brand></Brand>
      <Features />
      <GradientText>This is a Gradient Text</GradientText>


    </div>
  );

}

export default App;

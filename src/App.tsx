import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SplashCursor from "./components/utils/SplashCursor";
import Projects from "./components/Projects/Project";
import Boluwatife from "./components/Wm";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <SplashCursor/>
      <Hero/>
      <Projects/>
      <About/>
      <Boluwatife/>
      <Contact/>
    </>
  );
}

export default App;

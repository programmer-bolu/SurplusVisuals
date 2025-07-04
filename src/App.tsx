import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import SplashCursor from "./components/utils/SplashCursor"
import Projects from "./components/Projects/Project"

function App() {

  return (
    <>
    <SplashCursor />
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
    </>
  )
}

export default App

import { profile,skills } from "./data";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    <Navbar profile = {profile}/>
      <Hero profile={profile} />
      <About skills={skills}/>
      <Skills skills={skills}/>
      <Projects Projects={Projects}/>
    
    </>
  );
}

export default App;
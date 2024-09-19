import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects"
import Contact from "./components/Contact/contact"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

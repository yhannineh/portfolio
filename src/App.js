import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>

    </div>
  );
}

export default App;

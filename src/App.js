import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      <div className="overflow-x-hidden">
        <Navbar />
        <br />
        <br />
        <Header />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;

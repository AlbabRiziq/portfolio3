import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
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
      </div>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import ContactMe from "./components/ContactMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <Recommendations />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;

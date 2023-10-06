import {} from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import PageContent from "./Components/PageContent";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <PageContent />
        <Cards />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

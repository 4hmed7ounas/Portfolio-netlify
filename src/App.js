import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Home/Portfolio";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contacts/Contact"
import Extra from "./Pages/Extra/Extra"
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar title="𝔄𝔥𝔪𝔢𝔡 𝔜𝔬𝔲𝔫𝔞𝔰" />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="Home" element={<Portfolio />} />
            <Route path="About" element={<About />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Resume" element={<Resume />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Extra" element={<Extra />} />
          </Routes>
          <hr />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

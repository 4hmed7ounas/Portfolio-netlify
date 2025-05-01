import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Home/Portfolio";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contacts/Contact";
import Extra from "./Pages/Extra/Extra";
import Resume from "./Pages/Resume/Resume";
import Activities from "./Pages/About/Activities";
import DynamicBackground from "./Components/DynamicBackground";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="app-wrapper">
          <DynamicBackground />
          <Navbar title="𝔄𝔥𝔪𝔢𝔡 𝔜𝔬𝔲𝔫𝔞𝔰" />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="Home" element={<Portfolio />} />
              <Route path="About" element={<About />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Resume" element={<Resume />} />
              <Route path="Activities" element={<Activities />} />
              <Route path="Extra" element={<Extra />} />
              <Route path="Contact" element={<Contact />} />
            </Routes>
          </main>
          <hr />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Skills from "./components/Skills";
import Contact from './components/Contact'; // For default exports
import { Projects } from './components/Projects'; // For named exports

import { Footer } from "./components/Footer";
import StarsCanvas from './components/StarsCanvas';

function App() {
  return (
    <div className="App">
      <div className="moving-gradient-background"></div> {/* Gradient Background */}
      <StarsCanvas /> {/* Star Background */}
      <NavBar />
      <Banner />
      <Skills />
      <Projects /> {/* Using Projects component correctly */}
      <Contact />

      <Footer /> {/* Using Footer component correctly */}
    </div>
  );
}

export default App;

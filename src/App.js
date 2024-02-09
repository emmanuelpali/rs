import React from "react";

import {
  AboutUs,
  Footer,
  Gallery,
  Header,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import UncontrolledCarousel from "./container/UncontrolledCarousel/UncontrolledCarousel";
import Reveal from "./components/Reveal";

const App = () => (
  <div className="app">  
    <Navbar />
    <Reveal>
    <UncontrolledCarousel />
    </Reveal>
    <Header />    
    <AboutUs />
    <Reveal>
    <SpecialMenu />
    </Reveal>
    <Reveal>
    <Gallery />
    </Reveal>
    <Footer />
  </div>
);

export default App;

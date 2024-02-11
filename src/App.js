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
import Reveal from "./components/Reveal";

const App = () => (
  <div className="app px-2">  
    <Navbar />
    <Header />      
    <AboutUs />
    <Reveal>
    <SpecialMenu />
    </Reveal>
    <Reveal>
    </Reveal>
    <Reveal>
    <Gallery />
    </Reveal>
        <Reveal>
    <Footer />
        </Reveal>

  </div>
);

export default App;

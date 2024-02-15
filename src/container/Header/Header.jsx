import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import Reveal from "../../components/Reveal";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <Reveal>
      <div className="app__wrapper_info">
        <SubHeading title="" />
        <h1 className="app__header-h1">RS cuisine</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
        "Our foods are crafted with care and love, fueled by a passion for excellent taste."{" "}
        </p>
        <button type="button" className="custom__button">
          <a href="#menu">Explore Menu</a>
        </button>
      </div>
    </Reveal>

    <Reveal>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </Reveal>
  </div>
);

export default Header;

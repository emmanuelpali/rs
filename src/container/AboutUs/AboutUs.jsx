import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";
import Reveal from "../../components/Reveal";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
    </div>
    <div className="app__aboutus-content flex__center">
    <Reveal>

        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
          At our heart, we're a small family business driven by a passion for our community. We've taken common foods and transformed them into extraordinary dishes with our craft sauces. Join us in celebrating the flavors of tradition and innovation – These taste are rare to find.
          </p>
        </div>
    </Reveal>

      <Reveal>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.rslanding1} alt="about_knife" />
      </div>
      </Reveal>
    </div>
  </div>
);

export default AboutUs;

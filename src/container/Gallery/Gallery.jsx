import React from "react";

import { SubHeading } from "../../components";
import "./Gallery.css";
import UncontrolledCarousel from "../UncontrolledCarousel/UncontrolledCarousel";

const Gallery = () => {
  return (
    <div className="app__gallery flex__center text-center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Food Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Good times from some of our events
        </p>
      </div>
      <div className="app__gallery-images">
      <UncontrolledCarousel />
      </div>
    </div>
  );
};

export default Gallery;

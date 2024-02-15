import React from "react";

import "./MenuItem.css";
import { Accordion } from "react-bootstrap";

const MenuItem = ({ info, title, dozen, regular, large }) => (
  <Accordion.Item eventKey={title} className="bg-black text-center col-8" style={{ color: "#DCCA87", backgroundColor: "#0c0c0c" }}>
      <Accordion.Header className="app__menuitem-name bg-black text-center">
        <p className="p__cormorant mb-0" >
          {title}
        </p>
      </Accordion.Header>

      <Accordion.Body className="app__menuitem-price bg-black text-center">
      <hr className="app__menuitem-bottom-dash"/>
      {info && <p className="p__cormorant menu-info">{info}</p>}
        <p className="p__cormorant" >{dozen}</p>
        <p className="p__cormorant" >{regular}</p>
        <p className="p__cormorant" >{large}</p>
        <hr className="app__menuitem-bottom-dash"/>
      </Accordion.Body>

  </Accordion.Item>
);

export default MenuItem;

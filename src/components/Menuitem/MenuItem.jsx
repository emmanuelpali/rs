import React from "react";

import "./MenuItem.css";
import { Accordion } from "react-bootstrap";

const MenuItem = ({ title, dozen, regular, large }) => (
  <Accordion.Item eventKey={title} className="bg-black text-center col-12" >
      <Accordion.Header className="app__menuitem-name bg-black text-center">
        <p className="p__cormorant mb-0" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </Accordion.Header>
      <Accordion.Body className="app__menuitem-price bg-black text-center">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>{dozen}</p>
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>{regular}</p>
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>{large}</p>
      </Accordion.Body>
    {/* <hr className="app__menuitem-bottom-dash"/> */}
  </Accordion.Item>
);

export default MenuItem;

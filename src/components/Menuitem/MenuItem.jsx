import React from "react";

import "./MenuItem.css";
import { Accordion } from "react-bootstrap";

const MenuItem = ({ info, title, dozen, regular, large, fourliters, twolitres, aliter, fourteenoz, tenoz }) => (
  <Accordion.Item eventKey={title} className="bg-black text-center col-10" style={{ color: "#DCCA87", backgroundColor: "#0c0c0c" }}>
      <Accordion.Header className="app__menuitem-name bg-black text-center">
        <p className="p__cormorant mb-0" >
          {title}
        </p>
      </Accordion.Header>

      <Accordion.Body className="app__menuitem-price bg-black text-center">
      <hr className="app__menuitem-bottom-dash"/>
      {info && <p className=" menu-info">{info}</p>}
        {dozen && <p className="p__cormorant" >{dozen}</p>}
        {regular && <p className="p__cormorant" >{regular}</p>}
        {large && <p className="p__cormorant" >{large}</p>}
        {fourliters && <p className="p__cormorant" >{fourliters}</p>}
        {twolitres && <p className="p__cormorant" >{twolitres}</p>}
        {aliter && <p className="p__cormorant" >{aliter}</p>}
        {fourteenoz && <p className="p__cormorant" >{fourteenoz}</p>}
        {tenoz && <p className="p__cormorant" >{tenoz}</p>}



      </Accordion.Body>

  </Accordion.Item>
);

export default MenuItem;

import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, dozen, regular, large }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-price">
        <p className="p__cormorant">{dozen}</p>
        <p className="p__cormorant">{regular}</p>
        <p className="p__cormorant">{large}</p>
      </div>
    </div>
    <hr className="app__menuitem-bottom-dash"/>
  </div>
);

export default MenuItem;

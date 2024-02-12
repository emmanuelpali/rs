import React from "react";
import { data, images } from "../../constants";
import "./SpecialMenu.css";
import { MenuItem, SubHeading } from "../../components";
import { Accordion } from "react-bootstrap";


// 

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
      
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palate" />
      <h1 className="headtext__cormorant">Craft Menu</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <Accordion defaultActiveKey={0} className="app__specialMenu_menu_items">
          {data.specialty.map((specialItem, index) => (
            <MenuItem
              key={specialItem.title + index}
              title={specialItem.title}
              dozen={specialItem.dozen}
              regular={specialItem.regular}
              large={specialItem.large}
            />
          ))}
        </Accordion>
      </div>
    </div>
    <div className="app__specialMenu-menu_img">
        <img src={images.masaBg} alt="menu__img" />
      </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading headtext__cormorant">Masa</p>
        <Accordion defaultActiveKey={0} className="app__specialMenu_menu_items bg-dark">
          {data.masaMenu.map((masaItem, index) => (
            <MenuItem
              key={masaItem.title + index}
              title={masaItem.title}
              dozen={masaItem.dozen}
              regular={masaItem.regular}
              large={masaItem.large}
            />
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

export default SpecialMenu;

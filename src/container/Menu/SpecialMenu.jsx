import React from "react";
import { data, images } from "../../constants";
import "./SpecialMenu.css";
import { MenuItem, SubHeading } from "../../components";


// 

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
      
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Craft Menu</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.specialty.map((specialItem, index) => (
            <MenuItem
              key={specialItem.title + index}
              title={specialItem.title}
              dozen={specialItem.dozen}
              regular={specialItem.regular}
              large={specialItem.large}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu_img">
        <img src={images.masaBg} alt="menu__img" />
      </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Masa</p>
        <div className="app__specialMenu_menu_items">
          {data.masaMenu.map((masaItem, index) => (
            <MenuItem
              key={masaItem.title + index}
              title={masaItem.title}
              dozen={masaItem.dozen}
              regular={masaItem.regular}
              large={masaItem.large}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;

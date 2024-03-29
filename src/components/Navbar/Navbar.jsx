import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  React.useEffect(() => {
    let timeoutId;
  const handleScroll = () => {
    clearTimeout(timeoutId); 
    setShow(true); 
    timeoutId = setTimeout(() => {
      setShow(false);
    }, 500); 
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timeoutId); // Clear timeout on component unmount
  };
}, []);
  return (
    <nav className={`navbar ${show && 'hidden'} fixed-top app__navbar  fixed`}>
      <div className="app__navbar-logo">
         <img src={images.rs} alt="app__logo" /> 
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#contact" className="p__opensans">
          Order
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#dcca87"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Order
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

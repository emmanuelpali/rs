import React from "react";
import { FiInstagram } from "react-icons/fi";

import { FooterOverlay} from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" id="contact">Contact Us</h1>
        <p className="p__opensans">Calgary</p>
        <p className="p__opensans" ><a href="tel:5872249044">587-224-9044</a></p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.rs} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Savor our comfort made just for you. Treat yourself, you deserve it!.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt={images.spoon}
        />
        <div className="app__footer-links_icons">
          <a href="https://instagram.com/rs_cuisine_yyc?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
          {/* <FiTwitter /> */}
          {/* <FiFacebook /> */}
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{new Date().getFullYear()} RS. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

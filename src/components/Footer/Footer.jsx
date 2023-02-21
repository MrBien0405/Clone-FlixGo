import React from "react";
import logo from "../assets/app store.png";
import "./Footer.scss";
function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-wrap'>
          <div className='top-footer'>
            <div className='left-footer'>
              <h4>Download Our App</h4>
              <div className='box-img-footer'>
                <img src={logo} alt='logo' />
              </div>
            </div>
            <div className='center1-footer'>
              <h4>Resources</h4>
              <ul>
                <li>About Us</li>

                <li>Pricing Plan</li>

                <li>Help Center</li>
              </ul>
            </div>
            <div className='center2-footer'>
              <h4>Legal</h4>
              <ul>
                <li>Terms of Use</li>

                <li>Privacy Policy</li>

                <li>Security</li>
              </ul>
            </div>
            <div className='right-footer'>
              <h4>Contact</h4>
              <ul>
                <li>8 800 234 56 78</li>
                <li>support@flixgo.com</li>
              </ul>
              <ul className="ul-icon-footer">
                <li><ion-icon name="logo-facebook"></ion-icon></li>
                <li><ion-icon name="logo-instagram"></ion-icon></li>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-vk"></ion-icon></li>  
              </ul>
            </div>
          </div>

          <div className='bottom-footer'>
            <p>© FlixGo, 2018—2022. Create by Dmitry Volkov.</p>
            <div className="text-bottom-footer">
              <a href=''>Terms of Use</a>
              <a href=''>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

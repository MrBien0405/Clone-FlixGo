import React, {useState} from "react";
import logo from "../../components/assets/screenshot_1676895584.png";
import "./Navbar.scss";
function Navbar() {
    const [isShrinked, setIsShirinked]=useState(false)
  return (
    <>
      <div className='header'>
        <div className='header_wrap'>
          <div className='left-header'>
            <div className='boximgheader'>
              <img src={logo} alt='' />
            </div>
          </div>
          <div className={isShrinked ? "nav-center menu-responsive" : "center-header"}>
            <ul>
              <li>
                <a href=''>HOME </a>
                <ion-icon name='chevron-down-outline'></ion-icon>
              </li>

              <li>
                <a href=''>CATALOG</a>
                <ion-icon name='chevron-down-outline'></ion-icon>
              </li>

              <li>
                <a href=''>PRICING</a>
              </li>

              <li>
                <a href=''>HELP</a>
              </li>

              <li className='li'>
                <a href=''>...</a>
              </li>
            </ul>
          </div>
          <div className='right-header'>
            <ul>
              <li>
                <a href=''>
                  <p>
                    <ion-icon name='search-outline'></ion-icon>
                  </p>
                </a>
              </li>

              <li>
                <a href=''>EN</a>
              </li>

              <li className='li-signin'>
                <a href=''>SIGN IN</a>
              </li>
              <div className='iconmenu' onClick={()=>setIsShirinked(!isShrinked)}>
                <ion-icon name='menu-outline'></ion-icon>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

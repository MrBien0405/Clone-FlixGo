import React, {useState} from "react";
import logo from "../../components/assets/logo.svg";
import "./Navbar.scss";
function Navbar() {
    const [isShrinked, setIsShirinked]=useState(false)
  return (
    <>
      <div className='header'>
        <div className='header-wrap'>
          <div className='left-header'>
            <div className='boximgheader'>
              <a href="/"><img src={logo} alt='' /></a>
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
                    <ion-icon name='search-outline'></ion-icon>
                
                </a>
              </li>

              <li>
                <a href=''>EN</a>
              </li>

              <li className='li-signin'>
                <a href='/login'>SIGN IN</a>
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

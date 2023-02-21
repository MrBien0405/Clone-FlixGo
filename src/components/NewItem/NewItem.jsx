import React from "react";
import "./NewItem.scss";
import logo1 from "../assets/cover1.jpg";
function NewItem() {
  return (
    <>
      <div className='new-item-content-container'>
        <div className='new-item-content'>
          <div className='top-new-item'>
            <h2>New items</h2>
            <ul>
              <li>NEW RELEASES</li>
              <li>MOVIES</li>
              <li>TV SERIES</li>
              <li>CARTOONS</li>
            </ul>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='bottom-new-item'>
                <div className='left-box-img-new-item'>
                  <img src={logo1} alt='logo' />
                </div>
                <div className='right-new-item'>
                  <h2>I Dream in Another Language</h2>
                  <p>Action, Triler</p>
                  <ul>
                    <li>
                      <ion-icon name='star-outline'></ion-icon> 8.4
                    </li>
                    <li className='li-right-item'>HD</li>
                    <li className='li-right-item'>16+</li>
                  </ul>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                  </p>
                </div>
              </div>

              <div className='bottom-new-item'>
                <div className='left-box-img-new-item'>
                  <img src={logo1} alt='logo' />
                </div>
                <div className='right-new-item'>
                  <h2>I Dream in Another Language</h2>
                  <p>Action, Triler</p>
                  <ul>
                    <li>
                      <ion-icon name='star-outline'></ion-icon> 8.4
                    </li>
                    <li className='li-right-item'>HD</li>
                    <li className='li-right-item'>16+</li>
                  </ul>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                  </p>
                </div>
              </div>

              <div className='bottom-new-item'>
                <div className='left-box-img-new-item'>
                  <img src={logo1} alt='logo' />
                </div>
                <div className='right-new-item'>
                  <h2>I Dream in Another Language</h2>
                  <p>Action, Triler</p>
                  <ul>
                    <li>
                      <ion-icon name='star-outline'></ion-icon> 8.4
                    </li>
                    <li className='li-right-item'>HD</li>
                    <li className='li-right-item'>16+</li>
                  </ul>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewItem;

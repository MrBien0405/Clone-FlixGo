import React, { useContext } from "react";
import "./NewItem.scss";
import { dataListMovieContext } from "../../App";
function NewItem() {
  let dataItem = useContext(dataListMovieContext);
  console.log(dataItem);
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

          <div className='col'>
            {dataItem ? (
              <>
                {dataItem.map((e) => (
                  <div className='row'>
                    <div className='bottom-new-item'>
                      <div className='left-box-img-new-item'>
                        <img src={e.image} alt='logo' />
                      </div>
                      <div className='right-new-item'>
                        <h2>{e.name}</h2>
                        <p>{e.performer}</p>
                        <ul>
                          <li>
                            <ion-icon name='star-outline'></ion-icon> {e.rating}
                          </li>
                          <li className='li-right-item'>{e.fullview}</li>
                          <li className='li-right-item'>{e.age}+</li>
                        </ul>
                        <p>{e.content}</p>
                      </div>
                    </div>

                    {/* <div className='bottom-new-item'>
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
              </div> */}

                    {/* <div className='bottom-new-item'>
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
              </div> */}
                  </div>
                ))}
              </>
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewItem;

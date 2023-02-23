import React, { useContext } from "react";
import { dataListMovieContext } from "../../App";
import logo from "../../components/assets/cover1.jpg";
import video from "../../components/assets/View_From_A_Blue_Moon_Trailer-576p.mp4";
import "./ItemDetail.scss";
function ItemDetail() {
  const dataItemDetail = useContext(dataListMovieContext)
  return (
    <>
      <div className='item-detail-container'>
        <div className='item-detail'>
          <h2>I Dream in Another Language</h2>

          <div className='item-detail-page-wrap'>
            <div className='wrap-item-detail'>
              <div className='left1-item-detail'>
                <div className='box-img-item-detail'>
                  <img src={logo} alt='' />
                </div>
              </div>

              <div className='left2-item-detail'>
                <ul>
                  <li>
                    <ion-icon name='star-outline'></ion-icon> 8.4
                  </li>
                  <li className='li-icon-detail'>HD</li>
                  <li className='li-icon-detail'>16+</li>
                </ul>
                <p>
                  <span>Genre:</span> Action, Triler
                </p>
                <p className='p-detail'>Release year: 2017</p>
                <p className='p-detail'>Running time: 120 min</p>
                <p>
                  <span>Country: </span>USA
                </p>
                <p className='p-p-detail'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy...
                </p>
              </div>
            </div>
            <div className='right-item-detail'>
              <div className='video-detail'>
                <video  controls>
                  <source src={video} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;

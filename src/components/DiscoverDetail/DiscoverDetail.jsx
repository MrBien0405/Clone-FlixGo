import React, { useContext } from "react";
import { dataListCommentContext, dataListMovieContext } from "../../App";
import img from "../../components/assets/cover1.jpg";
import img1 from "../../components/assets/cover1.jpg";
import "./DiscoverDetail.scss";
function DiscoverDetail(props) {
  let { inputValue, handleClickComment, handleChangeInputComment } = props;
  const dataDiscoverDetail = useContext(dataListMovieContext);
  const dataListComment = useContext(dataListCommentContext);
  // if (dataListComment.dataComment.length === 0) {
  //   return <>loading....</>;
  // }
  return (
    <>
      <div className='discover-container'>
        <div className='wrap-discover'>
          <h2>Discover</h2>
          <ul>
            <li>COMMENTS</li>
            <li>REVIEWS</li>
            <li>PHOTOS</li>
          </ul>
          <div className='child-discover'>
            <div className='left-child-discover'>
              <div className='avatar-child-discover'>
                <div className='avatar-discover'>
                  <img src={img1} alt='' />
                </div>
                <div className='name-child-discover'>
                  <h6>John Doe</h6>
                  <p>30.08.2018, 17:53</p>
                </div>
              </div>

              {dataListComment.dataComment.map((e) => (
                <>
                  <div key={e.id} className='child-comment-discover'>
                    <p>{e.comment}</p>
                  </div>
                  <div className='like-detail'>
                    <ul>
                      <li>
                        <i className='fa-regular fa-thumbs-up'></i> 12
                      </li>
                      <li>
                        <i className='fa-regular fa-thumbs-down'></i> 7
                      </li>
                    </ul>
                    <ul>
                      <li>REPLY</li>
                      <li>QUOTE</li>
                    </ul>
                  </div>
                </>
              ))}

              <div className='comment-detail'>
                <form action='' onSubmit={handleClickComment}>
                  <textarea
                    onChange={handleChangeInputComment}
                    id=''
                    value={inputValue}
                    name='name'
                    className='form-textarea'
                    placeholder='Add comment'
                  ></textarea>
                  <button>Send</button>
                </form>
              </div>
            </div>
            <div className='right-child-discover'>
              <h2>You may also like...</h2>

              <div className='col'>
                {dataDiscoverDetail.map((e) => (
                  <div key={e.id} className='right-box-discover'>
                    <div className='right-img-detail'>
                      <img src={e.image} alt='' />
                    </div>
                    <h4>{e.name}</h4>
                    <p>{e.performer}</p>
                    <p>
                      <ion-icon name='star-outline'></ion-icon>{" "}
                      <span>{e.rating}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscoverDetail;

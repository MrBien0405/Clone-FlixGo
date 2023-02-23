import React, { useContext } from "react";
import { dataListMovieContext } from "../../App";
import DiscoverDetail from "../../components/DiscoverDetail/DiscoverDetail";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./Detail.scss";
function DetailPage(props) {
  let { inputValue, handleClickComment, handleChangeInputComment } = props;
  return (
    <>
      <ItemDetail />
      <DiscoverDetail
        inputValue={inputValue}
        handleClickComment={handleClickComment}
        handleChangeInputComment={handleChangeInputComment}
      />
    </>
  );
}

export default DetailPage;

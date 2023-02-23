import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import DetailPage from "./pages/DetailPage/DetailPage";
import Content from "./components/Contents/Content";
import "./App.scss";
function App() {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/ListMovie")
      .then((axiosDataMovies) => setDataMovie(axiosDataMovies.data))
      .catch((err) => console.log(err));
  }, []);
  localStorage.setItem("ListMovie", JSON.stringify(dataMovie));
  let dataListMovie = JSON.parse(localStorage.getItem("ListMovie"));
  const handleChangeInputComment = (e) => {
    setInputValue(e.target.value);
  };
  const handleClickComment = (e) => {
    if (inputValue === "") {
      alert("Nhập Comment vào bạn ơi");
    } else {
      e.preventDefault();
      const new_comment = { comment: inputValue };
      axios
        .post("http://localhost:3000/comment", new_comment)
        .then((axiosDataComment) => {
          setDataComment([...dataComment, axiosDataComment.data]);
        })
        .catch((err) => console.log(err));
      setInputValue("");
    }
    console.log(inputValue);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/comment")
      .then((axiosGetDataComment) => setDataComment(axiosGetDataComment.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <dataListCommentContext.Provider value={{ dataComment, inputValue }}>
        <dataListMovieContext.Provider value={dataListMovie}>
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route path='/' element={<Content />}></Route>
              <Route
                path='/detail'
                element={
                  <DetailPage
                    inputValue={inputValue}
                    handleClickComment={handleClickComment}
                    handleChangeInputComment={handleChangeInputComment}
                  />
                }
              ></Route>
            </Route>

            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<SignUp />}></Route>
          </Routes>
        </dataListMovieContext.Provider>
      </dataListCommentContext.Provider>
    </div>
  );
}
export const dataListCommentContext = createContext();
export const dataListMovieContext = createContext();
export default App;

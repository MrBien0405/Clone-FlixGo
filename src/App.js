
import "./App.scss";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp"
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<SignUp/>}></Route>
   </Routes>
   </>
  );
}

export default App;

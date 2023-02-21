import React from "react";
import axios from "axios";
import logo1 from "../assets/logo.svg";
import "./SignUp.scss";
function Register() {
  const register = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    axios
      .post("http://localhost:3000/user", {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((axiosDataRegister) => console.log(axiosDataRegister))
      .catch((error) => console.log(error));
    window.location.href = "/login";
  };
  return (
    <>
      <div className='register-container-flixgo'>
        <div className='register-flixgo'>
          <div className='wrap-flixgo-container'>
            <div className='box-img-flixgo'>
              <img src={logo1} alt='' />
            </div>
            <div className='wrap-flixgo'>
              <form action='' onSubmit={register}>
                <input
                  className='input'
                  type='name'
                  name='username'
                  id=''
                  placeholder='Name'
                />
                <input
                  className='input'
                  type='email'
                  name='email'
                  id=''
                  placeholder='Email'
                />
                <input
                  className='input'
                  type='password'
                  name='password'
                  id=''
                  placeholder='Password'
                />
                <input
                  className='checkbox'
                  type='checkbox'
                  //   checked='checked'
                  name='remember'
                  id=''
                />
                <label className='label-remember' htmlFor=''>
                  I agree to the <a href=''>Privacy Policy</a>
                </label>
                <div className='btn-register'>
                  <button>SIGN UP</button>
                </div>
              </form>
              <p>
                Already have an account? <a href=''>Sign in!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

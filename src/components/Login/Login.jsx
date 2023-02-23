import React from "react";
import logo1 from "../assets/logo.svg";
import "./Login.scss";
function Login() {
  const login = (e) => {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    let dataUser = JSON.parse(localStorage.getItem("usersList"));
    console.log(dataUser, data);
    for (let i = 0; i < dataUser.length; i++) {
      if (
        dataUser[i].email === data.email &&
        dataUser[i].password === data.password
      ) {
        return (window.location.href = "/");
      } else {
        alert("Email hoặc mật khẩu bị sai");
      }
      // console.log(JSON.parse(localStorage.getItem("usersList"))[i]);
    }
  };

  return (
    <>
      <div className='login-container-flixgo'>
        <div className='login-flixgo'>
          <div className='wrap-flixgo-container'>
            <div className='box-img-flixgo'>
              <img src={logo1} alt='' />
            </div>
            <div className='wrap-flixgo'>
              <form action='' onSubmit={login}>
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
                  Remember
                </label>
                <div className='btn-login'>
                  <button>SIGN IN</button>
                </div>
              </form>
              <p>
                Don't have an account?<a href='/register'>Sign up!</a>
              </p>
              <p>
                <a href=''>Forgot password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

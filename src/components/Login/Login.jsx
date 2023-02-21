import React from "react";
import logo1 from "../assets/logo.svg";
import "./Login.scss";
function Login() {
  return (
    <>
      <div className='login-container-flixgo'>
        <div className='login-flixgo'>
          <div className='wrap-flixgo-container'>
            <div className='box-img-flixgo'>
              <img src={logo1} alt='' />
            </div>
            <div className='wrap-flixgo'>
              <form action=''>
                <input className="input" type='email' name='email' id='' placeholder='Email' />
                <input
                className="input"
                  type='password'
                  name='password'
                  id=''
                  placeholder='Password'
                />
                <input
                className="checkbox"
                  type='checkbox'
                //   checked='checked'
                  name='remember'
                  id=''
                />
                <label className="label-remember" htmlFor=''>Remember</label>
                <div className="btn-login"><button>SIGN IN</button></div>
              </form>
              <p>
                Don't have an account?<a href=''>Sign up!</a>
              </p>
              <p><a href="">Forgot password?</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

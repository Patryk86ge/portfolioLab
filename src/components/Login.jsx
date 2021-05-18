import React from 'react'
import Strip from './Strip'
import NavBar from './NavBar'
import Input from '../assets/input/Input'
import '../assets/scss/elements/login.scss'

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="login_strip">
        <Strip text="Zaloguj się" />
      </div>
      <section className="login_form">
        <div className="container">
          <p></p>
          <div className="login_box">
            <div className="login_input">
              <Input
                text="Email"
                type="text"
                name=""
                style={{backgroundColor:'red'}}
              />
              <Input
                text="Hasło"
                type="password"
                name=""
                style={{ backgroundColor: "red" }}
              />
              <Input
                text="Powtórz hasło"
                type="password"
                name=""
                style={{ backgroundColor: "red" }}
              />
            </div>
            <div className="login_btn">
              <button>Załóż konto</button>
              <button>zaloguj się</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login

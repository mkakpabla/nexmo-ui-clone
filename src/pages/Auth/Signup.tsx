import React from "react"
import { Link } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import nexmoLogo from "../../images/login.svg";
import { LOGIN } from "../../routes/auth";
export const Signup: React.FC = () => {
    return (
      <div className="login__page">
        <div className="form__part">
          <div className="page__logo">
            <img src={nexmoLogo} alt="Logo" />
          </div>
          <h1 className="title">Welcome back!</h1>
          <p>
            We missed you. Have an account yet? <Link to={LOGIN.link}>Login</Link>
          </p>
          <form action="">
            <div className="input__grid">
              <Input type="text" label="First name" name="firstname" />
              <Input type="text" label="Last name" name="lastname" />
            </div>
            <Input type="email" label="Email" name="email" />
            <Input type="password" label="Password" name="password" />
            <a href="" className="d-block">
              I forgot my password
            </a>
            <Button style={{ marginTop: 20 }}>Create my free account</Button>
          </form>
        </div>
        <div className="banner__part bg-reg"></div>
      </div>
    );
}
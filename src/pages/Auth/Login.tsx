import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import nexmoLogo from "../../images/login.svg";
import loginImg from "../../images/login-img.png";
import { Link } from "react-router-dom"
import { SIGNUP } from "../../routes/auth";

export const Login: React.FC = () => {
  return (
    <div className="login__page">
      <div className="form__part">
        <div className="page__logo">
          <img src={nexmoLogo} alt="Logo" />
        </div>
        <h1 className="title">Welcome back!</h1>
        <p>
          We missed you. Don't have an account yet? <Link to={SIGNUP.link}>Sign up</Link>
        </p>
        <form action="">
          <Input type="text" label="Email" name="email" />
          <Input type="password" label="Password" name="password" />
          <a href="" className="d-block">
            I forgot my password
          </a>
          <Button style={{ marginTop: 20 }}>Log In</Button>
        </form>
      </div>
      <div className="banner__part ">
        <img src={loginImg} alt="Image" />
        <h1 className="banner__title">Vonage Start ups</h1>
        <p>Receive API credits, product expertise, co-promotion
          opportunities and much more!
        </p>
        <a href="">Apply Now</a>
      </div>
    </div>
  );
};

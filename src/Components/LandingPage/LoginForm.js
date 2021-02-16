import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useHistory, useRouteMatch } from "react-router-dom";
import UserStore from "../../UserStore";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [inputType, setInputType] = useState("password");
  const [btnDisable, setBtnDisable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { url } = useRouteMatch();

  useEffect(() => {
    if (localStorage.checkbox) {
      setUser((prevState) => ({
        ...prevState,
        email: localStorage.email,
        password: localStorage.password,
      }));
      setIsChecked(true);
    }
  }, []);

  const handleChange = (e) => {
    setErrMsg("");
    setBtnDisable(false);
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleInputType = (type) => setInputType(type);

  const onChangeCheckbox = () => setIsChecked(!isChecked);

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnDisable(true);
    if (user) {
      UserStore.isLoggedIn = true;

      if (isChecked) {
        localStorage.email = user.email;
        localStorage.password = user.password;
        localStorage.checkbox = isChecked;
      } else {
        localStorage.email = "";
        localStorage.password = "";
        localStorage.checkbox = "";
      }
      history.replace("/home");
    } else {
      setBtnDisable(false);
      setErrMsg("Error");
    }
  };
  const componentClicked = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Form onSubmit={handleSubmit} className="LoginForm">
        {errMsg && <Alert variant="danger">{errMsg}</Alert>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="loginPasswordInput">
            <Form.Control
              className="passwordField"
              name="password"
              type={inputType}
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {inputType === "password" ? (
              <i
                className="fa fa-eye-slash"
                aria-hidden="true"
                onClick={() => toggleInputType("text")}
              ></i>
            ) : (
              <i
                className="fa fa-eye"
                aria-hidden="true"
                onClick={() => toggleInputType("password")}
              ></i>
            )}
          </div>
          <NavLink to={`/forgotPassword`} className="small float-right">
            Forgot Password ?
          </NavLink>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember me"
            checked={isChecked}
            onChange={onChangeCheckbox}
          />
        </Form.Group>

        <Button
          variant="primary"
          disabled={btnDisable}
          type="submit"
          className="w-100"
        >
          Login
        </Button>
        <div className="otherFormOptions">
          <p> --- Or Login with --- </p>
          <div className="socialLoginBtns">
            <FacebookLogin
              appId="1088597931155576"
              textButton="Facebook"
              size="small"
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook"
            />
            <GoogleLogin
              className="googleBtn"
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <NavLink to={`/register`} className="registerFormLink">
            New User ? Register here !
          </NavLink>
        </div>
      </Form>
    </motion.div>
  );
}

export default LoginForm;

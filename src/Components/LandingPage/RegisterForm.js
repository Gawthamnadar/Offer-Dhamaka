import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function RegisterForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    gender: "",
  });
  const [inputType, setInputType] = useState("password");
  const [btnDisable, setBtnDisable] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    setErrMsg("");
    setBtnDisable(false);
    const { name, value } = e.target;

    if (name == "password" && value.length > 10) return;
    if (name == "phoneNo" && value.length > 10) return;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const toggleInputType = (type) => setInputType(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Form className="RegisterForm" onSubmit={handleSubmit}>
        {errMsg && <Alert variant="danger">{errMsg}</Alert>}
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={user.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <div className="loginPasswordInput">
            <Form.Control
              name="password"
              className="passwordField"
              value={user.password}
              onChange={handleChange}
              type={inputType}
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phoneNo"
            value={user.phoneNo}
            onChange={handleChange}
            type="text"
            placeholder="Phone No."
            required
          />
        </Form.Group>
        <Form.Group>
          <div key="custom-inline-radio" className="mb-3">
            <Form.Check
              // custom
              inline
              label="Male"
              type="radio"
              id="custom-inline-radio-1"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />
            <Form.Check
              // custom
              inline
              label="Female"
              type="radio"
              id="custom-inline-radio-2"
              name="gender"
              value="Female"
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Button
          variant="primary"
          disabled={btnDisable}
          type="submit"
          className="w-100"
        >
          Register
        </Button>
        <div className="otherFormOptions">
          <NavLink to={`/login`} className="loginFormLink">
            Existing User ? Login here !
          </NavLink>
        </div>
      </Form>
    </motion.div>
  );
}

export default RegisterForm;

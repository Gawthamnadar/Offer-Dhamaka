import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

function ForgotPasswordForm() {
  const history = useHistory();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Form className="ForgotPasswordForm">
        <i
          class="fa fa-arrow-circle-left"
          aria-hidden="true"
          title="Back to Login"
          onClick={() => history.push(`/Login`)}
        ></i>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="text-center">
            Please enter your registered email address and we will help you to
            reset your password.
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        <div className="otherFormOptions">
          <NavLink to={`/register`} className="loginFormLink">
            New User ? Register here !
          </NavLink>
        </div>
      </Form>
    </motion.div>
  );
}

export default ForgotPasswordForm;

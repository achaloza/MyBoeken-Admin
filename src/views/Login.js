/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Form, FormGroup, FormInput, Button, FormFeedback } from "shards-react";
import { withRouter } from "react-router-dom";
import validator from "validator";

function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errorMsg, setErrorMsg] = useState({
    usernameErrormsg: "",
    passwordErrormsg: "",

  });
  const [jwt, setJwt] = useState({ name: "Admin", token: "1234567890ABCD" });
  const [errors, setErrors] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };
  const validate = () => {
    let formValidation = {
      usernameErrormsg: "",
      passwordErrormsg: "",
    };
    let isError = false;
    if (validator.isEmpty(user.username)) {
      isError = true;
      formValidation.usernameErrormsg = "username is required";
    }
    if (validator.isEmpty(user.password)) {
      isError = true;
      formValidation.passwordErrormsg = " Password url is required";
    }
    if (isError) {
      setErrors(true);
      setErrorMsg(formValidation);
    }
    return isError;
  };
  const Save = e => {
    if (!validate()) {
      localStorage.setItem('_id', "1");
      props.history.push("analytics");
    }
    e.preventDefault();
  };

  return (
    <Container fluid className="main-content-container h-100 px-4">
      <Row noGutters className="h-100">
        <Col lg="3" md="5" className="auth-form mx-auto my-auto">
          <Card>
            <CardBody>
              {/* Logo */}
              {/* <img
                className="auth-form__logo d-table mx-auto mb-3"
                src={require("../images/shards-dashboards-logo.svg")}
                alt="Shards Dashboards - Login Template"
              /> */}
              <img
                className="d-table mx-auto mb-3"
                src={require("../images/logo.png")}
                alt="MyBoeken.nl - Admin Panel"
              />
              {/* Title */}
              <h5 className="auth-form__title text-center mb-4">Admin Login</h5>

              {/* Form Fields */}
              <Form>
                <FormGroup>
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <FormInput
                    type="email"
                    id="exampleInputEmail1"
                    name="username"
                    placeholder="Enter email"
                    autoComplete="email"
                    value={user.username}
                    onChange={onChange}
                    className={errors &&
                      errorMsg.usernameErrormsg != "" ? "is-invalid" : ""
                    }
                  />
                  {errors &&
                    errorMsg.usernameErrormsg != "" && (
                      <FormFeedback>{errorMsg.usernameErrormsg}</FormFeedback>
                    )}
                </FormGroup>
                <FormGroup>
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <FormInput
                    type="password"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    autoComplete="current-password"
                    value={user.password}
                    onChange={onChange}
                    className={errors &&
                      errorMsg.passwordErrormsg != "" ? "is-invalid" : ""}
                  />
                  {(errors &&
                    errorMsg.passwordErrormsg != "") && (
                      <FormFeedback>{errorMsg.passwordErrormsg}</FormFeedback>
                    )}
                </FormGroup>

                <Button
                  pill
                  theme="accent"
                  className="d-table mx-auto"
                  type="submit"
                  onClick={Save}
                >
                  LogIn
                </Button>
              </Form>
            </CardBody>
          </Card>
          {/* Meta Details */}
          <div className="auth-form__meta d-flex mt-4">
            {/* <Link to="/forgot-password">Forgot your password?</Link> */}
            {/* <Link to="/register" className="ml-auto">
            Create a new account?
          </Link> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

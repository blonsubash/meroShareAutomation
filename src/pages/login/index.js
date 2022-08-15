import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent } from "@mui/material";

import "./index.css";

import GoogleIcon from "../../images/google.svg";
import LeftSideVector from "../../images/left-side.svg";
import Logo from "../../images/logo.png";

const Login = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please enter an email"),
      password: Yup.string().required("Pleas enter an email"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div className="login__main-section">
      <div className="login__left-section">
        <img src={LeftSideVector} className="login__left-side-vector" />
      </div>
      <div className="login">
        <Card style={{ border: "none", boxShadow: "none", maxHeight: "650px" }}>
          <CardContent>
            <div className="login__welcome-section">
              <img src={Logo} />
              <h5 className="login__welcome">Welcome to Automation</h5>
            </div>
            <div className="login-text-field">
              <TextField
                id="email"
                className="login__text-field"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="login-text-field">
              <TextField
                id="password"
                className="login__text-field"
                label="Password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div className="login__forgot">
              <p className="login__forgot-password">Forgot password?</p>
            </div>
            <div className="login__footer-section">
              <div>
                <Button
                  variant="contained"
                  className="login__btn"
                  onClick={formik.handleSubmit}
                >
                  Login
                </Button>
              </div>
              <div className="login__sign_in">
                <img src={GoogleIcon} className="login__google-icon" />
                <p className="login__sign_in_google">Sign in with Google</p>
              </div>
            </div>
            <div className="login__sign_up">
              <p>Don't have an account yet? </p>
              <p className="login__sign_up_here"> Sign Up</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;

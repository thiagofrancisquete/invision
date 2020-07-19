import * as yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";

import "./Login.scss";

import Google from "../../components/Google/Google";
import SignBtn from "../../components/Sign/SignBtn";
import Title from "../../components/Title/Title";
import Slide from "../../components/Carousel/Slide";

const validations = yup.object().shape({
  name: yup.string().min(3).required("This field can not be empty"),
  password: yup.string().min(8).required("This field can not be empty"),
});

function Login() {
  async function handleSubmit() {
    alert("aqui voce seria redirecionado");
  }

  return (
    <div className="login-container">
      <div className="bg-left">
        <Slide />
      </div>
      <div className="login-form">
      <h1>Invision</h1>
        <Title titulo="Welcome to Invision" />
        <Formik
          initialValues={{ name: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Form">
            <label>Users name or email *</label>
            <Field className="Form-Field" type="text" name="name" id="name" />
            <ErrorMessage className="Form-Error" component="span" name="name" />
            <br />
            <label>Password *</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              className="Form-Error"
              component="span"
              name="password"
            />
            <Link className="forgot" to="/">
              Forgot password?
            </Link>
            <SignBtn text="Sign in" />
          </Form>
        </Formik>
        <div className="line-container">
          <div className="line" />
          <span id="or">Or</span>
          <div className="line" />
        </div>
        <Google title="Sign in" />
        <div className="rodape">
          <p>
            New <b>Invision</b>? <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

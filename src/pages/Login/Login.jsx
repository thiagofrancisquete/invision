import * as yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";

import "./Login.scss";

import Google from "../../components/Google/Google";
import SignBtn from "../../components/Sign/SignBtn";
import Title from "../../components/Title/Title";
import bg from "../../assets/component.png";


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
      <div className="content">
        <img src={bg} alt="laranjinha e acerola" />
      </div>
      <div className="login-form">
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
        <span id="or">Or</span>
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

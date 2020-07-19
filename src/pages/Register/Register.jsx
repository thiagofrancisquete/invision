import * as yup from "yup";

import React from "react";
import { useHistory, Link } from "react-router-dom";

import { ErrorMessage, Formik, Form, Field } from "formik";

import "./Register.scss";

import bg from "../../assets/component.png";
import Google from "../../components/Google/Google";
import SignBtn from "../../components/Sign/SignBtn";
import Title from "../../components/Title/Title";

function Register() {
  
  const validations = yup.object().shape({
    fullname: yup.string().min(3).required("This field can not be empty"),
    username: yup.string().min(3).required("This field can not be empty"),
    password: yup.string().min(8).required("This field can not be empty"),
  });
  

  const history = useHistory();

  async function handleCreateLogin() {
    history.push("/");
  }

  return (
    <div className="login-container">
      <div className="content">
        <img src={bg} alt="laranjinha e acerola" />
      </div>
      <div className="login-form">
        <Title titulo="Getting started" />
       
        <Formik
          initialValues={{ fullname: "", username: "", password: "" }}
          onSubmit={handleCreateLogin}
          validationSchema={validations}
        >
          <Form className="Form">
            <label>Full name *</label>
            <Field className="Form-Field" type="text" name="fullname" id="fullname" />
            <ErrorMessage className="Form-Error" component="span" name="fullname" />
            <br />
            <label>User name or Email *</label>
            <Field className="Form-Field" type="text" name="username" id="username" />
            <ErrorMessage className="Form-Error" component="span" name="username" />
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
            <SignBtn text="Sign up" />
          </Form>
        </Formik>
        <Google title="Sign up" />
        <div className="rodape">
          <p>
            By signing up, you agree to <b>Invision</b> <br />{" "}
            <Link to="/">Terms of Conditions</Link> and <Link to="/">Privacy Policy</Link>
          </p>
          <p>Already on <b>Invision</b>? <Link to="/">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;

/**
 * 
 * 

        <Formik
          initialValues={{ fullname: "", username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Form">
            <label>Full name *</label>
            <Field className="Form-Field" type="text" name="fullname" id="fullname" />
            <ErrorMessage className="Form-Error" component="span" name="fullname" />
            <br />
            <label>User name or Email *</label>
            <Field className="Form-Field" type="text" name="username" id="username" />
            <ErrorMessage className="Form-Error" component="span" name="username" />
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



 */

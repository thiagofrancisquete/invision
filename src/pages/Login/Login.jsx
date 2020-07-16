import * as yup from 'yup'
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";

import "./Login.scss";

import bg from "../../assets/component.png";
import google from '../../assets/google.png'

const validations = yup.object().shape({
  name: yup.string().email().required('this field can not be empty'),
  password: yup.string().min(8).required('this field can not be empty')
})

function Login() {
  const history = useHistory();

  async function handleSubmit(e) {
    // seria algo nessa linha
    // e.preventDefault()

    // history.push('/home')
    alert('aqui voce seria redirecionado')
  }

  return (
    <div className="login-container">
      <div className="content">
        <img src={bg}/>
        <span>Marcenas mattis egestas</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, eveniet? Consequuntur.</p>
      </div>
      <div className="login-form">
        <span>Welcome to invision</span>
        <Formik
          initialValues={{ name: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Form">
            <label>Users name or email *</label>
            <Field
              className="Form-Field"
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage className="Form-Error" component="span" name="name" />
            <br />
            <label>Password *</label>
            <Field
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage className="Form-Error" component="span" name="password" />
            <Link className="forgot" to="/register">
              Forgot password?
            </Link>
            <button type="submit">Sign In</button>
          </Form>
        </Formik>
        <span id="or">Or</span>
        <button type="button" id="google"><img src={google} alt=""/> Login with google</button>
      </div>
    </div>
  );
}

export default Login;

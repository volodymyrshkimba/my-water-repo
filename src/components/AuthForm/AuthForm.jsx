import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import clsx from "clsx";

import css from "./AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import EyeIcon from "../EyeIcon/EyeIcon";
import { registerWater } from "../../redux/auth/operations";

const AuthForm = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isRepeatPasswordShown, setIsRepeatPasswordShown] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log({ email: values.email, password: values.password });
    dispatch(registerWater({ email: values.email, password: values.password }));
    actions.resetForm();
    navigate("/");
  };

  const registerSchema = Yup.object({
    email: Yup.string().email("Incorrect email").required("Required"),
    password: Yup.string()
      .min(8, "At least 8 characters")
      .max(64, "Less than 64 characters")
      .required("Required"),
    repeatPassword: Yup.string()
      .min(8, "At least 8 characters")
      .max(64, "Less than 64 characters")
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Required"),
  });

  return (
    <div className={css.formWrapper}>
      <h2 className={css.title}>Sign Up</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        {({ touched, errors }) => (
          <Form className={css.form} noValidate>
            <label>
              <span className={css.labelText}>Enter your email</span>
              <Field
                className={clsx({
                  [css.error]: errors.email && touched.email,
                })}
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="span"
              />
            </label>
            <label>
              <span className={css.labelText}>Enter your password</span>
              <Field
                className={clsx({
                  [css.error]: errors.password && touched.password,
                })}
                type={isPasswordShown ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <button
                type="button"
                className={css.eyeButton}
                onClick={() => setIsPasswordShown(!isPasswordShown)}
              >
                {isPasswordShown ? <EyeIcon open /> : <EyeIcon />}
              </button>
              <ErrorMessage
                className={css.errorMessage}
                name="password"
                component="span"
              />
            </label>
            <label>
              <span className={css.labelText}>Repeat password</span>
              <Field
                className={clsx({
                  [css.error]: errors.repeatPassword && touched.repeatPassword,
                })}
                type={isRepeatPasswordShown ? "text" : "password"}
                name="repeatPassword"
                placeholder="Repeat password"
              />
              <button
                type="button"
                className={css.eyeButton}
                onClick={() => setIsRepeatPasswordShown(!isRepeatPasswordShown)}
              >
                {isRepeatPasswordShown ? <EyeIcon open /> : <EyeIcon />}
              </button>
              <ErrorMessage
                className={css.errorMessage}
                name="repeatPassword"
                component="span"
              />
            </label>
            <button className={css.btn} type="submit">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <Link className={css.link} to="/">
        Sign in
      </Link>
    </div>
  );
};

export default AuthForm;

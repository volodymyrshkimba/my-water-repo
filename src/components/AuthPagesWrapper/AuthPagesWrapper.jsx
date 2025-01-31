import css from "./AuthPagesWrapper.module.css";

const AuthPagesWrapper = ({ children }) => {
  return <div className={css.background}>{children}</div>;
};

export default AuthPagesWrapper;

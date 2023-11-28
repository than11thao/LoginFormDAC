import React, { useState } from "react";
import "./LoginForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { dispatchLogin } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { validate } from "../../utils/validateData";
import AccountServices from "../../services/AccountServices";

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

const LoginForm = () => {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  // catch login button click event generate data sent to login API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validate(email, password)) {
        const res = await AccountServices.userLogin({
          email,
          password,
        });
        setUser({ ...user, err: "", success: res.data.msg });
        localStorage.setItem("firstLogin", true);

        dispatch(dispatchLogin());
        navigate("/");
      }
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="title-login">WELCOME</label>
        <div className="input-container">
          <input
            type="email"
            value={encodeURI(email)}
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            value={encodeURI(password)}
            id="pass"
            name="password"
            onChange={handleChangeInput}
            placeholder="Password"
            required
          />
        </div>
        <div className="button-container">
          <button className="login-button" type="submit">
            Login
          </button>
          .
        </div>
        <div className="extension-login">
          <button className="login-facebook">Facebook</button>
          <button className="login-gmail">Google</button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;

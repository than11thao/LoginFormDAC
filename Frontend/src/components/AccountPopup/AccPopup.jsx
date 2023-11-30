import React, { useRef, useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import "./AccPopup.scss";
import {
  WRONG_CONFIRM_PASSWORD,
  ADD_NEW_ACCOUNT_SUCCESSFULLY,
  ERROR_ADD_NEW_ACCOUNT_FAILED,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  INVALID_PHONE,
} from "../../containers/alertContainer";
import AccountServices from "../../services/AccountServices";
import { useSelector, useDispatch } from "react-redux";
import { fetchAddUser, dispatchAddUser } from "../../redux/actions/authAction";

const initialState = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  role_id: "",
  address: "",
  phone: "",
  confirm_password: "",
  err: "",
  success: "",
};

const AccPopup = (props) => {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const roleRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);
  console.log(auth);
  const { isAdmin } = auth;

  const [data, setData] = useState(initialState);
  const [isDropDetail, setDropDetail] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdmin) {
      fetchAddUser(token).then((res) => {
        dispatch(dispatchAddUser(res));
        setData(res.data);
        console.log(res.data);
      });
    }
  }, [token, isAdmin, dispatch, setData]);

  const closePopup = () => {
    props.changePopup();
  };

  const changeDetailDrop = () => {
    setDropDetail(!isDropDetail);
  };

  async function handleSubmit() {
    const password = passwordRef.current.value;
    const confirm = confirmRef.current.value;
    const email = emailRef.current.value;
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const role_id = roleRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;

    const res = await AccountServices.postNewAccount(data);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      alert(INVALID_EMAIL);
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(INVALID_PASSWORD);
      return;
    }

    if (password !== confirm) {
      alert(WRONG_CONFIRM_PASSWORD);
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert(INVALID_PHONE);
      return;
    }
    console.log(res);
    if (res.data.result === "success") {
      alert(ADD_NEW_ACCOUNT_SUCCESSFULLY);
      closePopup();
    } else {
      alert(ERROR_ADD_NEW_ACCOUNT_FAILED);
    }
  }

  return (
    <div className="acc-popup">
      <div className="acc-popup-inner">
        <div className="acc-title-pop">
          Create Account
          <button className="acc-close-btn" onClick={closePopup}>
            <AiOutlineClose
              className={`${isDropDetail ? "" : "dropped-icon"}`}
            />
          </button>
        </div>
        <div className="acc-title" onClick={changeDetailDrop}>
          Detail
          <AiOutlineDown className="drop-btn" />
        </div>
        <div className={`${"detail"} ${isDropDetail ? "" : "acc-dropped"}`}>
          <div className="acc-text-input">
            Email:
            <input ref={emailRef} type="text" name="name" />
          </div>
          <div className="acc-text-input">
            First name:
            <input ref={firstNameRef} type="text" name="name" />
          </div>
          <div className="acc-text-input">
            Last name:
            <input ref={lastNameRef} type="text" name="name" />
          </div>
          <div className="role-acc">
            Role:
            <select ref={roleRef} className="role-select" name="status">
              <option value="1">ADMIN</option>
              <option value="2">DAC</option>
              <option value="3">ADVERTISER</option>
            </select>
          </div>
          <div className="acc-text-input">
            Address:
            <input ref={addressRef} type="text" name="name" />
          </div>
          <div className="acc-text-input">
            Phone:
            <input ref={phoneRef} type="text" name="name" />
          </div>
          <div className="acc-text-input">
            Password:
            <input ref={passwordRef} type="password" name="name" />
          </div>
          <div className="acc-text-input">
            Confirm password:
            <input ref={confirmRef} type="password" name="name" />
          </div>
        </div>

        <div className="acc-footer-pop">
          <button className="cancel-btn" onClick={closePopup}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccPopup;

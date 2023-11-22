import React, { useEffect, useRef, useState } from 'react'
import './LoginForm.scss'
import LoginService from '../../services/LoginServices';
import { useNavigate } from 'react-router-dom';
import { authSuccess, authFailure } from '../../actions';
import { useDispatch } from 'react-redux';
import { validate } from '../../utils/validateData';

const LoginForm = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(null);


    //Call request login API in Login Service 
    useEffect(() => {
        function fetchLogin() {
            LoginService.login(userInfo).then((res) => {
                if (res.data.result === 'success') {
                    dispatch(authSuccess(res.data.data));
                    navigate('/homepage');
                }
                else {
                    dispatch(authFailure('invalid'));
                }
            }).catch(error => {
                dispatch(authFailure(error));
            });
        }
        if (userInfo !== null) fetchLogin();
    }, [dispatch, navigate, userInfo]);

    // catch login button click event generate data sent to login API
    function loginRequest() {

        let email = emailRef.current.value;
        let password = passRef.current.value;
        if (validate(email, password)) {
            var info = {
                email: email,
                password: password
            }
            setUserInfo(info);
        }
    }

    // catch enter button click in password event is same login button click 
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            loginRequest()
        }
    }

    return (
        <div className='form'>
            <form>
                <label className='title-login'>WELCOME</label>
                <div className='input-container'>
                    <input type='email' ref={emailRef} id='email' placeholder='Email' required />
                </div>
                <div className='input-container'>
                    <input type='password' ref={passRef} id='pass' onKeyDown={handleKeyDown} placeholder='Password' required />
                </div>
                <div className='button-container'>
                    <input className='login-button' onClick={loginRequest} type='button' value={'Login'}></input>.
                </div>
                <div className='extension-login'>
                    <button className='login-facebook'>Facebook</button>
                    <button className='login-gmail'>Google</button>
                </div>
            </form>
        </div>
    );
}
export default LoginForm;


import React, {useRef, useState} from "react";
import {AiOutlineDown, AiOutlineClose} from "react-icons/ai";
import './AccPopup.scss';
import AccountServices from "../../services/AccountServices";
import {useSelector} from "react-redux";
import * as events from "events";

const AccPopup = (props) => {
    const [firstname, setFirstName] = useState(props.record ? props.record.first_name : '');
    const email = props.record ? props.record.email : '';
    const [phone, setPhone] = useState(props.record ? props.record.phone : '');
    const [address, setAddress] = useState(props.record ? props.record.address : '');
    const [role, setRole] = useState(props.record ? props.record.role : '');
    const [lastname, setLastName] = useState(props.record ? props.record.last_name : '');
    const id = props.record ? props.record.id : '';

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    }

    const token = useSelector(state => state.token)
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const roleRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const idRef = useRef();
    const [isDropDetail, setDropDetail] = useState(true);

    function closePopup() {
        props.onClose();
    }

    function changeDetailDrop() {
        setDropDetail(!isDropDetail);
    }

    async function handleSubmit() {
        let email = emailRef.current.value;
        let fristName = firstNameRef.current.value;
        let lastName = lastNameRef.current.value;
        let role = roleRef.current.value;
        let address = addressRef.current.value;
        let phone = phoneRef.current.value;
        let id= idRef.current.value;
        let dataAcc = {
            'email': email,
            'first_name': fristName,
            'last_name': lastName,
            'role': parseInt(role),
            'address': address,
            'phone': phone,
            'id':id
        }
        // console.log(dataAcc);
        let res = await AccountServices.updateAccount(dataAcc, token);
        if (res.data.result === 'success') {
            alert('UPDATE ACCOUNT SUCCESSFULLY!');
            closePopup();
        } else {
            alert('UPDATE ACCOUNT FAILED!')
        }
    }

    return (
        <div className='acc-popup'>
            <div className='acc-popup-inner'>
                <div className='acc-title-pop'>
                    Edit Account
                    <button className='acc-close-btn' onClick={props.onClose}>
                        <AiOutlineClose className={`${isDropDetail ? '' : 'dropped-icon'}`}/>
                    </button>
                </div>
                <div className='acc-title' onClick={changeDetailDrop}>
                    Detail
                    <AiOutlineDown className='drop-btn'/>
                </div>
                <div className={`${'detail'} ${isDropDetail ? '' : 'acc-dropped'}`}>
                    <div className='acc-text-input'>
                        <input ref={idRef} value={id} type='hidden' name='name' />
                    </div>
                    <div className='acc-text-input'>
                        Email:
                        <input ref={emailRef} style={{backgroundColor: '#777777'}} readOnly="true" value={email} type="text" name='name' />
                    </div>
                    <div className='acc-text-input'>
                        First name:
                        <input ref={firstNameRef} value={firstname} onChange={handleFirstNameChange} type='text' name='name' />
                    </div>
                    <div className='acc-text-input'>
                        Last name:
                        <input ref={lastNameRef} value={lastname} onChange={handleLastNameChange}  type='text' name='name' />
                    </div>
                    <div className='role-acc'>
                        Role:
                        <select ref={roleRef} value={role} onChange={handleRoleChange} className='role-select' name='status'>
                            <option value="1">ADMIN</option>
                            <option value="2">DAC</option>
                        </select>
                    </div>
                    <div className='acc-text-input'>
                        Address:
                        <input ref={addressRef} value={address} onChange={handleAddressChange} type='text' name='name' />
                    </div>
                    <div className='acc-text-input'>
                        Phone:
                        <input ref={phoneRef} value={phone} onChange={handlePhoneChange} type='text' name='name' />
                    </div>
                </div>

                <div className='acc-footer-pop'>
                    <button className='cancel-btn' onClick={props.onClose}>Cancel</button>
                    <button className='save-btn' onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AccPopup;

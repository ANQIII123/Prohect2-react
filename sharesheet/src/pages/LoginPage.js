import {
    MDBBtn, MDBCheckbox, MDBCol,
    MDBInput, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem,
    MDBTabsLink, MDBTabsPane
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';

import { validateObjectFilled, validateEmail } from '../component/helper';

import axios from 'axios';
import User from '../models/User';

export default function LoginPage({ setUser }) {

    let [loginRegisterActive, setLoginRegisterActive] = useState('login')
    let [tempuser, setTempUser] = useState({})
    let [error, setError] = useState('')

    const handleLoginRegisterClick = (pageName) => {

        setLoginRegisterActive(pageName)

    }

    const handleChange = (event) => {
        let _user = tempuser
        _user[event.target.name] = event.target.value
        setTempUser(_user)
        console.log(JSON.stringify(tempuser))
    }


    const handleLogin = async (event) => {

        let emptyKeys = validateObjectFilled(tempuser, [], ['logUserEmail', 'logUserPassword'])

        if (emptyKeys.length >= 1) {
            setError('please fill in user email and password')
            return
        }

        if (!validateEmail(tempuser.logUserEmail)) {
            setError('please fill in a valid email')
            return
        }

        setError('Checking with server')

        let result = await axios.post('https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io/login',
            {
                "userEmail": tempuser.logUserEmail,
                "password": tempuser.logUserPassword
            })


        if (!result.data[0]) {
            setError(result.data[1].reason)
        }

        else {
            setError('')
            setUser(result.data[1])
            alert('login sucess')
        }

    }

    const handleRegister = async (event) => {

        console.log('register clicked')

        let emptyKeys = validateObjectFilled(tempuser, [], [
            "regNickName",
            "regUsername",
            "regEmail",
            "regUserPassword",
            "regUserPassword1"])

        if (emptyKeys.length >= 1) {
            setError('please fill in all fields')
            return
        }

        if (!validateEmail(tempuser.regEmail)) {
            setError('please fill in a valid email')
            return
        }

        if (tempuser.regUserPassword != tempuser.regUserPassword1) {
            setError('re-enter password mismatch')
            return
        }

        let newUser = new User(tempuser.regNickName, tempuser.regUsername, tempuser.regEmail, tempuser.regUserPassword);

        console.log(newUser)

        setError('Checking with server')

        let result = await axios.post('https://3000-anqiii123-project2expre-x3pfoh1qdt5.ws-us54.gitpod.io/register',
            {
                user: newUser
            })

        if (!result[0]) {
            setError(result.data[1].reason)
            return
        }

        setError('register success');
        alert('Registered success')


    }



    return (
        <React.Fragment>

            <div className=' row d-flex justify-content-center '>
                <div className='search_background col-sm-10' style={{ backgroundColor: 'white', padding: '2rem' }}>

                    <div style={{ width: '22rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <MDBTabs pills justify className='mb-3'>
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleLoginRegisterClick('login')}
                                    active={loginRegisterActive === 'login'}
                                    
                                >
                                    Login
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleLoginRegisterClick('register')}
                                    active={loginRegisterActive === 'register'}                                    
                                >
                                    Register
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane show={loginRegisterActive === 'login'}>

                                <MDBInput className='mb-4' type='email' label='Email address' name='logUserEmail' onChange={handleChange} />
                                <MDBInput className='mb-4' type='password' label='Password' name='logUserPassword' onChange={handleChange} />

                                <MDBRow className='mb-4'>
                                    <MDBCol className='d-flex justify-content-center'>
                                        <MDBCheckbox label='Remember me' defaultChecked />
                                    </MDBCol>
                                    <MDBCol>
                                        <a href='#' onClick={() => alert('we have send you an email to reset your password')}>Forgot password?</a>
                                    </MDBCol>
                                </MDBRow>

                                {error == '' ? null :
                                    (
                                        <MDBRow className="mb-3" style={{ color: 'red' }}>
                                            <p>{error}</p>
                                        </MDBRow>
                                    )
                                }


                                <MDBBtn className='mb-4' onClick={() => { handleLogin() }} color='dark' block>
                                    Sign in
                                </MDBBtn>

                                <div className='text-center'>
                                    <p>
                                        Not a member? <a href='#' onClick={() => handleLoginRegisterClick('register')}>Register</a>
                                    </p>
                                </div>

                            </MDBTabsPane>
                            <MDBTabsPane show={loginRegisterActive === 'register'}>

                                <MDBInput className='mb-4' label='Nick Name' name='regNickName' onChange={handleChange} />
                                <MDBInput className='mb-4' label='Username' name='regUsername' onChange={handleChange} />
                                <MDBInput className='mb-4' type='email' label='Email address' name='regEmail' onChange={handleChange} />
                                <MDBInput className='mb-4' type='password' label='Password' name='regUserPassword' onChange={handleChange} />
                                <MDBInput className='mb-4' type='password' label='Repeat password' name='regUserPassword1' onChange={handleChange} />

                                <MDBCheckbox
                                    wrapperClass='d-flex justify-content-center mb-4'
                                    label='I have read and agree to the terms and conditions'
                                    defaultChecked
                                />

                                {error == '' ? null :
                                    (
                                        <MDBRow className="mb-3" style={{ color: 'red' }}>
                                            <p>{error}</p>
                                        </MDBRow>
                                    )
                                }

                                <MDBBtn className='mb-4' onClick={() => { handleRegister() }} color='dark' block>
                                    Register
                                </MDBBtn>

                            </MDBTabsPane>
                        </MDBTabsContent>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}
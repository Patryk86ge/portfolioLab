import React, {useRef, useState} from 'react';
import {Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from "react-router-dom";
import SEO from "./SEO";
import NavBar from "./NavBar";
import Strip from "./Strip";


const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, updatePassword,updateEmail} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const  handleSubmit = (e) => {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passowrd do not match')
        }
        const promises = []
        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises)
            .then(() => {
            history.push("/")
        }).catch (() => {
            setError("Failed to update account")
        }).finally(() => {
            setLoading(false)
        })

    }

    return (
        <>
            <SEO title='Update Profile'/>
            <NavBar/>
            <div className="login_strip">
                <Strip text="Update Profile"/>
            </div>
            {error && <p className='inputError'>{error}</p>}
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="login_box">
                        <div className="login_input">
                            <div id='email'>
                                <label>Email</label>
                                <input type='email' ref={emailRef} required/>
                            </div>
                            <div id='password'>
                                <label>Password</label>
                                <input type='password' ref={passwordRef} required/>
                                {error.passwordRef && <Alert variant='danger'>{error.passwordRef}</Alert>}
                            </div>
                            <div id='password-confirm'>
                                <label>password-confirm</label>
                                <input type='password' ref={passwordConfirmRef} required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login_btn">
                    <button disabled={loading} type='submit'>Update Profile</button>
                </div>
                <div className="cancel">
                    <Link style={{textDecoration:'none',color:'#3C3C3C'}} to="/">Cancel</Link>
                </div>
            </form>
        </>
    );
}

export default UpdateProfile;



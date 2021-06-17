import React, {useRef, useState} from 'react';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {NavHashLink} from "react-router-hash-link";
import SEO from './SEO'
import NavBar from "./NavBar";
import Strip from "./Strip";
import "../assets/scss/elements/login.scss";


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        if (!emailRef.current.value) {
            return setError("Podany email jest nieprawidłowe")
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailRef.current.value)) {
            return  setError("Zły e-mail")
        }
        if (passwordRef.current.value.length < 6) {
            return setError('hasło musi miec minimum 6 znakow')
        }


        try {
            setError('');
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to log in')
        }
    }

    return (
        <>
            <SEO title='login'/>
            <NavBar/>
            <div className="login_strip">
                <Strip text="Zaloguj się"/>
            </div>
            {error && <p className='inputError'>{error}</p>}
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="login_box">
                        <div className="login_input">
                            <div id='email'>
                                <label>Email</label>
                                <input
                                    type='email'
                                    ref={emailRef}
                                    required
                                />

                            </div>
                            <div id='password'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    ref={passwordRef}
                                    required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login_btn">
                    <button>
                        <NavHashLink
                            activeClassName="selected"
                            className="list"
                            to="/Signup"
                        >
                            Załóż konto
                        </NavHashLink>
                    </button>
                    <Link
                        style={{textDecoration:'none',color:'#3C3C3C'}}
                        to="/forgot-password"
                    >
                        Forgot-Password
                    </Link>
                    <button
                        disabled={loading}
                        className="list"
                    >
                        zaloguj się
                    </button>
                </div>
            </form>
        </>
    );
}
;

export default Login;
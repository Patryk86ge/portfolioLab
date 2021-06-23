import React, {useRef, useState} from 'react';
import {useAuth} from '../contexts/AuthContext'
import { useHistory } from "react-router-dom";
import SEO from "./SEO";
import {NavHashLink} from "react-router-hash-link";
import NavBar from "./NavBar";
import Strip from "./Strip";


const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
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

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Hasła musza byc identyczne')
        }
        try {
            setError('');
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <SEO title='Załóż konto'/>
            <NavBar/>
            <div className="login_strip">
                <Strip text="Załóż konto"/>
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
                                <label>Hasło</label>
                                <input type='password' ref={passwordRef} required/>
                                {error.passwordRef && <p>{error.passwordRef.current.value}</p>}
                            </div>
                            <div id='password-confirm'>
                                <label>Potwierdz Hasło</label>
                                <input type='password' ref={passwordConfirmRef} required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login_btn">
                    <button
                        className="list"
                        disabled={loading}
                    >
                        Załóż konto
                    </button>
                    <span className='login_line'> | </span>
                    <button>
                        <NavHashLink
                            activeClassName="selected"
                            className="list"
                            to="/Login"
                        >
                            zaloguj
                        </NavHashLink>
                    </button>
                </div>
            </form>
        </>
    );
};

export default Signup;
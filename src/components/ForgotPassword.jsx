import React, {useRef, useState} from 'react';
import {Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'
import SEO from "./SEO";
import NavBar from "./NavBar";
import Strip from "./Strip";


const ForgotPassword = () => {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('');
            setError('');
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Sprawdz swojego Email,postepuj zgodnie z instrukcja')
        } catch {
            setError('Nieudane resetowanie hasła')
        }
    }

    return (
        <>
            <SEO title='Reset Hasła'/>
            <NavBar/>
            <div className="login_strip">
                <Strip text="Reset Hasła"/>
            </div>
            {error && <p className='inputError'>{error}</p>}
            {message && <Alert variant='danger'>{message}</Alert>}
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="login_box">
                        <div className="login_input">
                            <div id='email'>
                                <label>Email</label>
                                <input type='email' ref={emailRef} required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login_btn">
                    <button disabled={loading} type='submit'>Reset Hasła</button>
                </div>
                <div style={{display :'flex', justifyContent: 'space-between'}}>
                    <Link
                        activeClassName="selected"
                        style={{margin:'0 40px',textDecoration:'none',color:'#3C3C3C'}}
                        to="/login"
                    >
                        Login
                    </Link>
                    <Link
                        activeClassName="selected"
                        style={{margin:'0 40px',textDecoration:'none',color:'#3C3C3C'}}
                        to="/signup"
                    >
                        Załóż Konto
                    </Link>
                </div>

            </form>


        </>
    );
}

export default ForgotPassword;


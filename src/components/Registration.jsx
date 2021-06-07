import React, {useState} from "react";
import {NavHashLink} from "react-router-hash-link";
import Strip from "./Strip";
import NavBar from "./NavBar";
import InputCustom from "../assets/InputCustom/InputCustom";
import "../assets/scss/elements/login.scss";
import SEO from './SEO'



function validate(values) {
    let errors = {};

    if (!values.email) {
        errors.email = "Podany email jest nieprawidłowe";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Zły e-mail";
    }
    if (!values.password) {
        errors.password = 'hasło jest wymagane';
    } else if (values.password.length < 6) {
        errors.password = 'hasło musi miec min 6 znakow';
    }
    if (!values.password2) {
        errors.password2 = 'haslo jest wymagane';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'hasla musza byc takie same';
    }

    return errors;
};

const Registration = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        password2: "",
    });
    const [errors, setErrors] = useState({});
    const [, setIsSubmitting] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)
    };
    console.log("Registration", values);

    return (
        <>
            <SEO title="registration"/>
            <NavBar/>
            <div style={{marginTop:'50px'}} className="login_strip">
                <Strip text="Zaloguj się"/>
            </div>
            <form onSubmit={handleSubmit} className="login_form">
                <div className="container">
                    <div className="login_box">
                        <div className="login_input">
                            <InputCustom
                                text="Email"
                                type="email"
                                name="email"
                                placeholder='email...'
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className='inputError'>{errors.email}</p>}
                            <InputCustom
                                text="Hasło"
                                type="password"
                                name='password'
                                placeholder='Hasło...'
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className='inputError'>{errors.password}</p>}
                            <InputCustom
                                text="Powtórz Hasło"
                                type="password"
                                name="password2"
                                placeholder='Powtórz Hasło...'
                                value={values.password2}
                                onChange={handleChange}
                            />
                            {errors.password2 && <p className='inputError'>{errors.password2}</p>}
                        </div>
                        <div className="login_btn">
                            <button className="list">

                                    Załóż konto
                            </button>
                            <button>
                                <NavHashLink
                                    activeClassName="selected"
                                    className="list"
                                    to="/Login"
                                >
                                    zaloguj się
                                </NavHashLink>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Registration;

import React, {useState} from "react";
import {NavHashLink} from "react-router-hash-link";
import Strip from "./Strip";
import NavBar from "./NavBar";
import InputCustom from "../assets/InputCustom/InputCustom";
import "../assets/scss/elements/login.scss";
import SEO from './SEO'
import Signup from "./Signup";


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

    return errors;
};


const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
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
    console.log("Login", values);

    return (
        <>
            <SEO title = 'login'/>
            <div className="login">
                <NavHashLink
                    to="/Login"
                    activeClassName="login_border"
                >
                    Zaloguj
                </NavHashLink>
                <NavHashLink
                    activeClassName="login_border"
                    to="/Signup"
                >
                    Załóż Konto
                </NavHashLink>
            </div>
            <NavBar/>
            <div style={{marginTop: '50px'}} className="login_strip">
                <Strip text="Zaloguj się"/>
            </div>
            <form
                className="login_form"
                onSubmit={handleSubmit}
            >
                <div className="container">
                    <div className="login_box">
                        <div className="login_input">
                            <InputCustom
                                text="Email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className='inputError'>{errors.email}</p>}
                            <InputCustom
                                text="Hasło"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className='inputError'>{errors.password}</p>}
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
                            <button className="list">
                                zaloguj się
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;

import React, {useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";



const Dashboard = () => {
    const [show, setShow] = useState(true);
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory()

    const handleLogOut = async () => {
        setError('')

        try {
            await logout()
            history.push('/logout')
        } catch {
            setError('Failed to log out')
        }

    }

    return (
        <>
            <div className="login">
                {error && <p className='inputError'>{error}</p>}
                <div className='loginIn'>
                    <strong className='nav_login'>Email: {currentUser.email}</strong>
                </div>
                <NavHashLink
                    to='/addClothes'
                    className='nav_login'
                    activeClassName="login_border"
                >
                    oddaj rzeczy
                </NavHashLink>
                <Link
                    to='/update-profile'
                    className='nav_login'
                >
                    Update Profile
                </Link>
                <button
                    style={{
                        border:'none',
                        backgroundColor:'white',
                        cursor:'pointer'
                    }}
                    variant='link'
                    onClick={handleLogOut}
                    className='nav_login'
                >
                    Wyloguj
                </button>
                <button className="hamburger" onClick={() => setShow(!show)}/>
            </div>
            <nav className="nav">
                <div className="nav_menu">
                    <div className={show ? "menu" : "menu__show"}>
                        <div className="menu_list">
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/"
                                onClick={() => setShow(true)}
                            >
                                Start
                            </NavHashLink>
                            <NavHashLink
                                activeClassName="selected"
                                className="list"
                                to="/#simpleStep"
                                onClick={() => setShow(true)}
                            >
                                O co Chodzi?
                            </NavHashLink>
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/#aboutAs"
                                onClick={() => setShow(true)}
                            >
                                O nas
                            </NavHashLink>
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/#whoweHelp"
                                onClick={() => setShow(true)}
                            >
                                Fundacja i organizacja
                            </NavHashLink>
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/#contact"
                                onClick={() => setShow(true)}
                            >
                                Kontakt
                            </NavHashLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Dashboard
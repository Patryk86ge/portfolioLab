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
                <strong className='nav_login'>Email:</strong><strong className='nav_login'>{currentUser.email}</strong>
                <NavHashLink
                    to='/oddaj-rzeczy'
                    className='nav_login'
                    activeClassName="login_border"
                >
                    oddaj-rzeczy
                </NavHashLink>
                <Link
                    to='/update-profile'
                    className='nav_login'
                >
                    Update Profile
                </Link>
                <button
                    style={{border:'none',backgroundColor:'white'}}
                    variant='link'
                    onClick={handleLogOut}
                    className='nav_login'
                >
                    Wyloguj
                </button>
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
                    <button className="hamburger" onClick={() => setShow(!show)}></button>
                </div>
            </nav>
        </>
        // <>
        //     <Card>
        //         <Card.Body>
        //             <h2 className='text-center mb-4'>Profile</h2>
        //             {error && <Alert variant='danger'>{error}</Alert>}
        //             <strong>Email:</strong>{currentUser.email}
        //             <Link to='/update-profile'
        //                   className='btn btn-primary w-100 mt-3'
        //             >
        //                 Update Profile
        //             </Link>
        //         </Card.Body>
        //
        //     </Card>
        //     <div>
        //         <Button variant='link' onClick={handleLogOut}>Log Out</Button>
        //     </div>
        // </>
    );
};

export default Dashboard
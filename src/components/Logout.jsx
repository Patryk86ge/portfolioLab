import React from 'react';
import {NavHashLink} from "react-router-hash-link";
import NavBar from "./NavBar";
import Strip from "./Strip";
import "../assets/scss/elements/logout.scss";
import SEO from './SEO'

const Logout = () => {
    return (
        <>
            <SEO title="logout"/>
            <section className='logOut'>
                <NavBar/>
                <div style={{marginTop: '100px'}}>
                    <Strip text="wylogowanie nastąpiło pomyślnie"/>
                </div>
                <div className='container'>
                    <NavHashLink
                        to='/#Home'
                        className='logOut_btn'
                    >
                        Strona główna
                    </NavHashLink>
                </div>
            </section>
        </>
    )
}

export default Logout;
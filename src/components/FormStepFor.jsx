import React from 'react';
import AddClothesBtn from "../assets/button/AddClothesBtn";
import {NavHashLink} from "react-router-hash-link";

const FormStepFor = () => {
    return (
        <>
            <AddClothesBtn
                text='text!'
                message='Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
            />
            <section className='formStepOne'>

                <h1>FormStepFor</h1>
                <NavHashLink
                    to='/formStepTwo'
                >
                    FormStepTwo
                </NavHashLink>
            </section>
        </>
    );
};

export default FormStepFor;
import React from 'react';
import AddClothesBtn from "../assets/button/AddClothesBtn";
import {NavHashLink} from "react-router-hash-link";

const FormStepThree = () => {
    return (
        <>
            <AddClothesBtn
                text='text!'
                message='Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
            />
            <section className='formStepOne'>

                <h1>FormStepThree</h1>
                <NavHashLink
                    to='/formStepTwo'
                >
                    Wstecz
                </NavHashLink>
                <NavHashLink
                    to='/formStepFor'
                >
                    Dalej
                </NavHashLink>
            </section>
        </>
    );
};

export default FormStepThree;
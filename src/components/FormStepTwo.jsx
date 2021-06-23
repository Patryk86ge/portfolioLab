import React from 'react';
import AddClothesBtn from "../assets/button/AddClothesBtn";
import {NavHashLink} from "react-router-hash-link";

const FormStepTwo = () => {
    return (
        <>
            <AddClothesBtn
                text='text!'
                message='Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
            />
            <section className='formStepOne'>

                <h1>FormStepTwo</h1>
                <NavHashLink
                    to='/formStepOne'
                >
                    Wstecz
                </NavHashLink>
                <NavHashLink
                    to='/formStepThree'
                >
                    Dalej
                </NavHashLink>
            </section>
        </>
    );
};

export default FormStepTwo;
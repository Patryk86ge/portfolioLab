import React from 'react';
import {NavHashLink} from "react-router-hash-link";
import AddClothesBtn from '../assets/button/AddClothesBtn'
import '../assets/scss/elements/formAdd.scss'


const FormStepOne = () => {
    return (
        <>
            <AddClothesBtn
                text='text!'
                message='Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
            />
            <section className='formAdd'>
                <p className="formAdd_steps">Krok 1/4</p>
                <form className="formAdd_one">
                    <h1 className='formAdd_nag'>Zaznacz co chcesz oddać:</h1>
                    <div className='form-check'>
                        <input type='checkbox'/>
                        <span className="checkmark"/>
                        <label>ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div className='form-check'>
                        <input type='checkbox'/>
                        <span className="checkmark"/>
                        <label>ubrania, do wyrzucenia</label>
                    </div>
                    <div className='form-check'>
                        <input type='checkbox'/>
                        <span className="checkmark"/>
                        <label>zabawki</label>
                    </div>
                    <div className='form-check'>
                        <input type='checkbox'/>
                        <span className="checkmark"/>
                        <label>książki</label>
                    </div>
                    <div className='form-check'>
                        <input type='checkbox'/>
                        <span className="checkmark"/>
                        <label>Inne</label>
                    </div>
                </form>
                <div className='FormAdd_btn'>
                    <NavHashLink
                        to='/FormStepTwo'
                    >
                        Dalej
                    </NavHashLink>
                </div>
            </section>
        </>
    );
};

export default FormStepOne;
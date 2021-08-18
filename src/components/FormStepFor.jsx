import React from 'react';
import AddClothesBtn from "../assets/button/AddClothesBtn";

const FormStepFor = ({next,prev}) => {
    return (
        <>
            <AddClothesBtn
                text='Ważne!'
                message='Podaj adres oraz termin odbioru rzeczy.'
            />
            <main className='formAdd'>
                <p className="formAdd_steps">Krok 4/4</p>
                <form className="formAdd_one">
                    <h1 className='formAdd_nag'>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
                  <section className='form__order'>
                      <div className='form__orderBox'>
                          <h4>Adres odbioru</h4>
                      </div>
                      <div className='form__orderBox'>
                          <h4>Termin odbioru</h4>

                      </div>
                  </section>
                    <div className='FormAdd_btnBox'>
                        <button onClick={prev}>Wstecz</button>
                        <button onClick={next}>Dalej</button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default FormStepFor;
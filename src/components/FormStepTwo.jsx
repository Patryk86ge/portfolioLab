import React from 'react';
import AddClothesBtn from "../assets/button/AddClothesBtn";
import '../assets/scss/elements/formAdd.scss'


const FormStepTwo = ({next, prev}) => {
  return (
    <>
      <AddClothesBtn
        text='Ważne!!'
        message='Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'
      />
      <section className='formAdd'>
        <p className="formAdd_steps">Krok 2/4</p>
        <form className="formAdd_one">
          <h1 className='formAdd_nag'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
          <div className='form-check form_select'>
            <label>Liczba 60l worków:</label>
            <div className='number__bags'>
              <select className='form-check_select' type='bags' id='bags'>
                <option>Liczba workow</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
          </div>
        </form>
        <div className='FormAdd_btnBox'>
          <button onClick={prev}>Wstecz</button>
          <button onClick={next}>Dalej</button>
        </div>
      </section>

    </>
  );
};

export default FormStepTwo;

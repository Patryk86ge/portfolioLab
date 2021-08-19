import React, {useState} from 'react';
import AddClothesBtn from "../assets/button/AddClothesBtn";
import '../assets/scss/elements/formAdd.scss'
import arrowUp from '../assets/image/Icon-Arrow-Up.svg'
import arrowDown from '../assets/image/Icon-Arrow-Down.svg'


const FormStepTwo = ({next, prev}) => {
  const [show,setShow] = useState(false);
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
            <p>Liczba 60l worków:</p>
            <div className='number__bags' onClick={() => setShow(!show)}>
              <div className='formTwo__select'>
                <p>-wybierz-</p>
                <img src={show ? arrowUp : arrowDown}/>
              </div>
              <ul className={show ? 'form-check_select' : 'form-check_hide'} type='bags' id='bags'>
                <li value='1'>1</li>
                <li value='2'>2</li>
                <li value='3'>3</li>
                <li value='4'>4</li>
                <li value='5'>5</li>
              </ul>
            </div>
          </div>
          <div className='FormAdd_btnBox'>
            <button onClick={prev}>Wstecz</button>
            <button onClick={next}>Dalej</button>
          </div>
        </form>
      </section>

    </>
  );
};

export default FormStepTwo;

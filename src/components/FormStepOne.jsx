import React, {useState} from 'react';
import AddClothesBtn from '../assets/button/AddClothesBtn'
import '../assets/scss/elements/formAdd.scss'


const FormStepOne = ({updateData, next, prev}) => {
  const [checked, setChecked] = useState('')
  const checkHelp = (update, id) => {
    if (typeof update === "function") {
      update(prev => {
        return {
          ...prev,
          id
        }
      })
    }
  }

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
            <span className="checkmark" onClick={() => checkHelp(updateData, 1)}/>
            <label>ubrania, które nadają się do ponownego użycia</label>
          </div>
          <div className='form-check'>
            <input type='checkbox'/>
            <span className="checkmark" onClick={() => checkHelp(updateData, 2)}/>
            <label>ubrania, do wyrzucenia</label>
          </div>
          <div className='form-check'>
            <input type='checkbox'/>
            <span className="checkmark" onClick={() => checkHelp(updateData, 3)}/>
            <label>zabawki</label>
          </div>
          <div className='form-check'>
            <input type='checkbox'/>
            <span className="checkmark" onClick={() => checkHelp(updateData, 4)}/>
            <label>książki</label>
          </div>
          <div className='form-check'>
            <input type='checkbox'/>
            <span className="checkmark" onClick={() => checkHelp(updateData, 5)}/>
            <label>Inne</label>
          </div>
          <div className='FormAdd_btnBox'>
            <button onClick={next}>Dalej</button>
          </div>
        </form>
      </section>
    </>
  );
};


export default FormStepOne;
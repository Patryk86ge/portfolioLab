import React from 'react';
import AddClothesBtn from "../assets/button/AddClothesBtn";

const FormStepThree = ({next,prev}) => {
    return (
        <>
            <AddClothesBtn
                text='Ważne!'
                message='Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'
            />
            <section className='formAdd'>
                <p className="formAdd_steps">Krok 3/4</p>
                <form className="formAdd_one">
                    <h1 className='formAdd_nag'>Lokalizacja:</h1>
                    <select>
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </select>
                    <div>
                        <h4>Komu chcemy pomóc?</h4>
                        <div style={{width:'600px'}}>
                            <input type='text' placeholder='dzieciom'/>
                            <input type='text' placeholder='samotnym matkom'/>
                            <input type='text' placeholder='bezdomnym'/>
                            <input type='text' placeholder='niepełnosprawnym'/>
                            <input type='text' placeholder='osobą starszym'/>
                        </div>

                    </div>
                    <h4>Wpisz nazwe konkretneji (opcionalnie)</h4>
                    <input type='text'/>
                    <div className='FormAdd_btnBox'>
                        <button onClick={prev}>Wstecz</button>
                        <button onClick={next}>Dalej</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default FormStepThree;
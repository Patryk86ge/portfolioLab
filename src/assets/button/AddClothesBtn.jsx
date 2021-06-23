import React from 'react';
import './addClothesBtn.scss'

const AddClothesBtn = (props) => {
    return (
        <section
            className='AddClothesBtn'>
            <h1 className='AddClothesBtn__text'>{props.text}</h1>
            <p className='AddClothesBtn__message'>{props.message}</p>
        </section>
    );
};

export default AddClothesBtn;
import React from "react";
import "../assets/scss/elements/contact.scss";
import Strip from "./Strip";
import InputCustom from "../assets/InputCustom/InputCustom";
import contactForm from "../assets/image/Background-Contact-Form.jpg";
import validate from '../assets/form/validateinfo'
import useForm from '../assets/form/useForm'



const Contact = () => {
    const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm(validate);

    return (
        <section id="contact" className="contact">
            <div className="contact_img">
                <img src={contactForm} alt="blanket"/>
            </div>
            <div className="contact_form">
                <Strip text="Skontaktuj się z nami"/>
                <form onSubmit={handleSubmit} className="form">
                    {isSubmitting  ?   <p className='inputSuccess'>Wiadomość została wysłana!<br/>Wktótce sie skontaktujemy.</p> : false}
                    <div className="form_input">
                        <div style={{width: '50%'}}>
                            <InputCustom
                                text='Imie'
                                type="text"
                                name="name"
                                placeholder='name...'
                                value = {values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className='inputError'>{errors.name}</p>}
                        </div>
                        <div style={{width: '50%'}}>
                            <InputCustom
                                text='Email'
                                type="email"
                                name="email"
                                placeholder='email...'
                                value = {values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className='inputError'>{errors.email}</p>}
                        </div>
                    </div>
                    <label>Wpisz swoją wiadomość</label>
                    <textarea
                        onChange={handleChange}
                        rows="3"
                        name="message"
                        placeholder='lorem...'
                        value = {values.message}
                    />
                    {errors.message && <p className='inputError'>{errors.message}</p>}
                    <div style={{textAlign:'end'}}> <button className="form_btn">Wyslij</button></div>
                </form>
            </div>
        </section>
    )

};

export default Contact;

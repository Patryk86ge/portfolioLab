import React, {useEffect, useState} from "react";
import "../assets/scss/elements/contact.scss";
import Strip from "./Strip";
import InputCustom from "../assets/InputCustom/InputCustom";
import contactForm from "../assets/image/Background-Contact-Form.jpg";



const validate = (form) => {
    if (!form.name) {
        return "Podane Imię jest nieprawidłowe";
    } else if (form.name.length < 2) {
        return "Podane Imię jest za krótkie";
    }
    if (!form.email) {
        return "Podany email jest nieprawidłowe";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
        return "Zły e-mail";
    }
    if (form.message.length < 120) {
        return "Minimum 120 znaków";
    }

    return false;
};
const Contact = () => {
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const updateField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMsg = validate(form);
        if (errorMsg) {
            setError(errorMsg);
            console.log("blad");
            return false;
        }
        console.log("form Submit", form);

        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(form),
        })
            .then((r) => r.json())
            // .then((data) => (data.status === 'form' ? setForm(true) : ''))
            .then(res => console.log(res))
            .catch((err) => console.log(err));
        //reset(form);
    };

    return (
        <section id="contact" className="contact">
                <div className="contact_img">
                    <img src={contactForm} alt="blanket"/>
                </div>
                <div className="contact_form">
                    <Strip text="Skontaktuj się z nami"/>
                    <div className='inputError'>{error}</div>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form_input">
                            <div style={{ width: '50%'}}>
                                <InputCustom
                                    text="Wpisz swoje imię"
                                    type="text"
                                    name="name"
                                    onChange={updateField}
                                    placeholder='name...'
                                />
                            </div>
                            <div style={{ width: '50%'}}>
                                <InputCustom
                                    text="Wpisz swój email"
                                    type="email"
                                    name="email"
                                    onChange={updateField}
                                    placeholder='email...'
                                />
                            </div>
                        </div>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            onChange={updateField}
                            rows="3"
                            name="message"
                            placeholder='lorem...'
                        />
                        <button className="form_btn">Wyslij</button>
                    </form>
                </div>
        </section>
    )};

export default Contact;

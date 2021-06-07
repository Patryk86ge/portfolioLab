import React, {useState} from "react";
import "../assets/scss/elements/contact.scss";
import Strip from "./Strip";
import InputCustom from "../assets/InputCustom/InputCustom";
import contactForm from "../assets/image/Background-Contact-Form.jpg";

function validate(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = "Podane Imię jest nieprawidłowe";
    } else if (values.name.length < 2) {
        errors.name = "Podane Imię jest za krótkie";
    }
    if (!values.email) {
        errors.email = "Podany email jest nieprawidłowe";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Zły e-mail";
    }
    if (values.message.length < 120) {
        errors.message = "Minimum 120 znaków";
    }

    return errors;
}


const Contact = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)

        console.log("form Submit", values);

        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(values),
        })
            .then((r) => r.json())
            // .then((data) => (data.status === 'form' ? setForm(true) : ''))
            .then(res => console.log(res))
            .catch((err) => console.log(err));
        // reset(form);

    };
    return (
            <section id="contact" className="contact">
                <div className="contact_img">
                    <img src={contactForm} alt="blanket"/>
                </div>
                <div className="contact_form">
                    <Strip text="Skontaktuj się z nami"/>
                    <form onSubmit={handleSubmit} className="form">
                        {/*{isSubmitting  ?   <p className='inputSuccess'>Wiadomość została wysłana!<br/>Wktótce sie skontaktujemy.</p> : false}*/}
                        <div className="form_input">
                            <div>
                                <InputCustom
                                    text='Imie'
                                    type="text"
                                    name="name"
                                    placeholder='name...'
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className='inputError'>{errors.name}</p>}
                            </div>
                            <div>
                                <InputCustom
                                    text='Email'
                                    type="email"
                                    name="email"
                                    placeholder='email...'
                                    value={values.email}
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
                            value={values.message}
                        />
                        {errors.message && <p className='inputError'>{errors.message}</p>}
                        <div style={{textAlign: 'end'}}>
                            <button className="form_btn">Wyslij</button>
                        </div>
                    </form>
                </div>
            </section>
    )
};

export default Contact;

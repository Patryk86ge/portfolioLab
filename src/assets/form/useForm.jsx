import { useState } from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
        password:'',
        password2:'',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false)



    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)
    };
    // console.log("form Submit", values);

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
    //reset(form);


    return { handleChange, handleSubmit, values, errors ,isSubmitting };
};

export default useForm;


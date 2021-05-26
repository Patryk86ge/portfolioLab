export default function validateInfo(values){
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
    if(!values.password){
        errors.password = 'hasło jest wymagane';
    }else if (values.password.length < 6){
        errors.password = 'hasło musi miec min 6 znakow';
    }
    if(!values.password2) {
        errors.password2 = 'haslo jest wymagane';
    }else  if (values.password2 !== values.password){
        errors.password2 = 'hasla musza byc takie same';
    }

    return errors;
};


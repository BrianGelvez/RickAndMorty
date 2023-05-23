

export const validation = (userData, errors, setErrors) => {
    if(!userData.username) {
    setErrors({...errors, username: 'por favor completa esta campo'});
    } else if(userData.username.length > 35) {
    setErrors({errors, username: "No puede superar los 35 caracteres"});
    }else if(! /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{0,3})?$/
    .test(userData.username)) {
    setErrors({errors, username: "Email invalido"})
    } else {
        setErrors({errors, username: ""}); 
    };

    if(userData.password.length < 6 || userData.password.length > 10) {
        setErrors({...errors, password: "longitud de password invalida"});
    } else if (!/\d/.test(userData.password)) {
        setErrors({...errors, password: "Debe contener al menos un numero"});
    } else {
        setErrors({...errors, password: ""})
    }
};


const validation = (userData) => {
    const errors = {};

    if(!/^[^\s@]{1,35}@[^\s@]+\.[^\s@]+$/.test(userData.email)){
errors.email = 'El email ingresado no es valido';
    }
if(!userData.email){
    errors.email = 'Debe ingresar un email';
}
if(!/^(?=.*\d).{6,10}$/.test(userData.password)){
    errors.password = 'La contraseña debe contener al menos 1 numero y tener entre 6 y 10 caracteres'
}


return errors;
}

export default validation;
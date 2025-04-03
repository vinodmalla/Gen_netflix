export const checkValidation = ( email, password ) => {
    const isEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    console.log( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
   


    if (!isEmail) return "Email ID is not valid";
    if (!isPassword) return "Password is not valid";
    
   
    return null; // Returns true if all validations pass
};

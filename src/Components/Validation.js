
const Validation = (values) => {
    let errors = {}

    if(!values.name){
        errors.name="Name is required."
    }
    if(!values.phone){
        errors.phone="Phone is required."
    }
    if(!values.city){
        errors.city="City is required"
    }
    if(!values.message){
        errors.message="Message is required"
    }

    return errors;
}

export default Validation;
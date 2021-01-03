import validator from 'validator';

export default function validate(values) {
    let errors = {};
    if (validator.isEmpty(values.userName)) {
        errors.email = 'Email address is required';
    }
    if (validator.isEmpty(values.password)) {
        errors.email = 'password is required';
    }
    if (validator.isEmpty(values.firstName)) {
        errors.email = 'firstname is required';
    }
    if (validator.isEmpty(values.lastName)) {
        errors.email = 'lastname is required';
    }
    if (values.roleId == 0) {
        errors.email = 'role is required';
    }
    return errors;
};
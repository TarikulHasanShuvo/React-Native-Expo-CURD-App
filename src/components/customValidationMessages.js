'use strict';

const customValidationMessages = {
    // English language - Used by default
    en: {
        numbers: '"{0}" must be a valid number.',
        email: '"{0}" must be a valid email address.',
        required: '"{0}" is mandatory.',
        date: '"{0}" must be a valid date ({1}).',
        minlength: '"{0}" length must be greater than {1}.',
        maxlength: '"{0}" length must be lower than {1}.',
        equalPassword: 'Passwords are different.',
        hasUpperCase: '"{0}" must contain a upper case.',
        hasLowerCase: '"{0}" must contain a lower case.',
        hasNumber: '"{0}" must contain a number.',
        hasSpecialCharacter: '"{0}" must contain a special character.',
    },
    //Bangla language
    bn: {
        numbers: '"{0}" একটি বৈধ সংখ্যা হতে হবে.',
        email: '"{0}" একটি বৈধ ইমেইল ঠিকানা আবশ্যক.',
        required: '"{0}" আবশ্যক.',
        date: '"{0}" must be a valid date ({1}).',
        minlength: '"{0}" length must be greater than {1}.',
        maxlength: '"{0}" length must be lower than {1}.',
        equalPassword: 'Passwords are different.',
        hasUpperCase: '"{0}" must contain a upper case.',
        hasLowerCase: '"{0}" must contain a lower case.',
        hasNumber: '"{0}" must contain a number.',
        hasSpecialCharacter: '"{0}" must contain a special character.',
    },
};

export default customValidationMessages;
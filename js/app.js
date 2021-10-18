function fullnameValidationForm() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var fullnameInputText = document.getElementsByClassName('input-fullname').value;

    if (fullnameInputText.length < 6 && fullname.indexOf(' ') >= 0) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function emailValidationForm() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var emailInputText = document.getElementsByClassName('input-email').value;

    if(emailInputText.indexOf('@') -1) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function passwordValidationForm() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var passwordInputText = document.getElementsByClassName('input-password').value;

    if (passwordInputText.length < 8 && passwordInputText != [A-Za-z0-9]) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function passwordCheckValidation() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var confirmPasswordInputText = document.getElementsByClassName('input-password2').value;

    if (passwordInputText !== confirmPasswordInputText ) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function ageValidation() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var ageInputText = document.getElementsByClassName('age-input').value;

    if(ageInputText > 18 && ageInputText != Number.isInteger()) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function phoneNumberValidation() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var phoneNumberInputText = document.getElementsByClassName('input-phone').value;

    if(phoneNumberInputText.length < 7 && phoneNumberInputText.indexOf(' ', '-', '{[()]}') >= 0) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function adressValidation() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var addressInputText = document.getElementsByClassName('input-adress').value;

    if(addressInputText.length < 5 && addressInputText.indexOf([A-Za-z0-9],' ')) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function residenceValidation() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var residenceInputText = document.getElementsByClassName('input-residence').value;

    if(residenceInputText.length < 3) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function postalCodeValidation() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var postalCodeInputText = document.getElementsByClassName('input-postal').value;

    if(postalCodeInputText.length < 3) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}

function dniValidation() {

    var error = document.getElementsByClassName('error-msg');

    var success = document.getElementsByClassName('fa-check-circle');

    var dniInputText = document.getElementsByClassName('input-dni').value;

    if(dniInputText > 7 || dniInputText < 8) {
        error.style = 'visibility: visible';
    } else {
        success.style = 'visibility: visible';
    }
}









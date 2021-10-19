var registerForm = document.getElementById('form');

var formInputs = document.getElementsByClassName('formInput');
var fullnameInput = document.getElementById('fullnameInput');
var emailInput = document.getElementById('emailInput ');
var passwordInput = document.getElementById('passwordInput');
var password2Input = document.getElementById('password2Input');
var ageInput = document.getElementById('ageInput');
var phoneInput = document.getElementById('phoneInput');
var addressInput = document.getElementById('addressInput');
var residenceInput = document.getElementById('residenceInput');
var postalInput = document.getElementById('postalInput');
var dniInput = document.getElementById('dniInput');

var fullnameMsg = document.getElementById('errMsgFullame');
var emailMsg = document.getElementById('errMsgEmail');
var passwordMsg = document.getElementById('errMsgPass');
var password2Msg = document.getElementById('errMsgPass2');
var ageMsg = document.getElementById('errMsgAge');
var phoneMsg = document.getElementById('errMsgPhone');
var addressMsg = document.getElementById('errMsgAddress');
var residenceMsg = document.getElementById('errMsgResidence');
var postalMsg = document.getElementById('errMsgPostal');
var dniMsg = document.getElementById('errMsgDni');
var spanMsg = document.getElementsByClassName('errMsg')

var sendButton = document.getElementsByClassName('sendButton');
var validations = document.getElementById('validationsDiv');

var fullnameReg = /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/;
var emailReg= /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/;
var passwordReg= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var symbolsReg = /([@"'(.?*+^$#()_-])/;
var numReg = /[0-9]/;
var addressReg = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/;

var fields = {
    fullname: false,
    email: false,
    password: false,
    password2: false,
    age:false,
    phoneNumber: false,
    address: false,
    residence:false,
    postal:false,
    dni:false,
}

//fullname
function fullnameValidation() {
    if (fullnameInput.value.match(fullnameReg) && fullnameInput.value.length >= 6)  {
        fullnameInput.style.border = '2px solid green';
        fullnameMsg.style.display = 'none';
        fields['name'] = true;
    } else {
        fullnameInput.style.border = '2px solid red';
        fullnameMsg.style.display = 'block';
        fields['name'] = false;
    }
}
fullnameInput.addEventListener('blur', fullnameValidation);

function clearFullnameMsg () {
    fullnameMsg.style.display= 'none';
}
fullnameInput.addEventListener('focus', clearFullnameMsg);

//email
function emailValidation() {
    if (emailInput.value.match(emailReg))  {
        emailInput.style.border = '2px solid green';
        emailMsg.style.display = 'none';
        fields['email'] = true;
    } else {
        emailInput.style.border = '2px solid red';
        emailMsg.style.display = 'block';
        fields['email'] = false;
    }
}
emailInput.addEventListener('blur', emailValidation);

function clearEmailMsg () {
    emailMsg.style.display= 'none';
}
emailInput.addEventListener('focus', clearEmailMsg);
//password
function passwordValidation() {
    if (passwordInput.value.match(passwordReg)) {
        passwordInput.style.border = '2px solid green';
        passwordMsg.style.display = 'none';
        fields['password'] = true;
    } else {
        passwordInput.style.border = '2px solid red';
        passwordMsg.style.display = 'block';
        fields['password'] = false;
    }
}
passwordInput.addEventListener('blur', passwordValidation);

function clearPasswordMsg() {
    passwordMsg.style.display= 'none';
}
passwordInput.addEventListener('focus', clearPasswordMsg);

//password2
function password2Validation() {
    if(password2Input.value == passwordInput.value) {
        password2Input.style.border = '2px solid green';
        password2Msg.style.display = 'none';
        fields['password2'] = true;
    }else{
        password2Input.style.border = '2px solid red';
        password2Msg.style.display = 'block';
        fields['password2'] = false;
    }
}
password2Input.addEventListener('blur', password2Validation);

function clearPass2Msg() {
    password2Msg.style.display = 'none';
}
password2Input.addEventListener('focus', clearPass2Msg);

//age
function ageValidation() {
    if (ageInput.value >= 18 && !ageInput.value.match(symbolsReg)) {
        ageInput.style.border = '2px solid green';
        ageMsg.style.display = 'none';
        fields['age'] = true;
    } else {
        ageInput.style.border = '2px solid red';
        ageMsg.style.display = 'block';
        fields['age'] = false;
    }
}
ageInput.addEventListener('blur', ageValidation);

function clearAgeMsg() {
    ageMsg.style.display = 'none';
}
ageInput.addEventListener('focus', clearAgeMsg);

//phone
function phoneValidation () {
    if (phoneInput.value.length >= 7 && phoneInput.value.match(numbersReg) && !phoneInput.value.match(symbolsReg)) {
        phoneInput.style.border = '2px solid green';
        phoneMsg.style.display = 'none';
        fields['phoneNumber'] = true;
    } else {
        phoneInput.style.border = '2px solid red';
        phoneMsg.style.display = 'block';
        fields['phoneNumber'] = false;
    }
}
phoneInput.addEventListener('blur', phoneValidation);

function clearPhoneMsg() {
    phoneMsg.style.display = 'none';
}
phoneInput.addEventListener('focus', clearPhoneMsg);

//address
function addressValidation () {
    if (addressInput.value.length >= 5 && addressInput.value.match(addressReg)) {
        addressInput.style.border = '2px solid green';
        addressMsg.style.display = 'none';
        fields['address'] = true;
    } else {
        addressInput.style.border = '2px solid red';
        addressMsg.style.display = 'block';
        fields['address'] = false;
    }
}
addressInput.addEventListener('blur', addressValidation);

function clearAddressMsg() {
    addressMsg.style.display = 'none';
}
addressInput.addEventListener('focus', clearAddressMsg);

//postal code
function postalValidation () {
    if (postalInput.value.length >= 3 ) {
        postalInput.style.border = '2px solid green';
        postalMsg.style.display = 'none';
        fields['postCode'] = true;
    } else {
        postalInput.style.border = '2px solid red';
        postalMsg.style.display = 'block';
        fields['postCode'] = false;
    }
}
postalInput.addEventListener('blur', postalValidation);

function clearPostalMsg() {
    postalMsg.style.display = 'none';
}
postalInput.addEventListener('focus', clearPostalMsg);

//dni
function dniValidation () {
    if ((dniInput.value.length >= 7 && dniInput.value.length <= 8) && dniInput.value.match(numbersReg) && !dniInput.value.match(symbolsReg)) {
        dniInput.style.border = '2px solid green';
        dniMsg.style.display = 'none';
        fields['dni'] = true;
    } else {
        dniInput.style.border = '2px solid red';
        dniMsg.style.display = 'block';
        fields['dni'] = false;
    }
}
dniInput.addEventListener('blur', dniValidation);

function clearDniMsg() {
    dniMsg.style.display = 'none';
}
dniInput.addEventListener('focus', clearDniMsg);

//button
registerForm.onsubmit= function(e) {
    e.preventDefault();
    if (fields ['fullname'] && fields ['email'] && fields ['password'] && fields ['password2'] && fields ['age'] && fields ['phoneNumber'] && fields ['address'] && fields ['residence'] && fields ['postCode'] && fields ['dni']) {
        validations.style.display = 'flex';
        alert ('Subscription process successful. Your user data is:' + '\n' + 'Name: ' + fullnameInput.value + '\n' + 'Email: ' + emailInput.value + '\n' + 'Age: ' + ageInput.value + '\n' + 'Phone Number: ' + phoneInput.value + '\n' + 'Address: ' + addressInput.value + '\n' + 'Residenec: ' + residenceInput.value + '\n' + 'Postal Code: ' + postalInput.value + '\n' + 'DNI: ' + dniInput.value)
    } else {
        alert ('Subscription process failed. Please check your data and try again.')
    }
}


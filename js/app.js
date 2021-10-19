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

var fullnameReg = /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/;
var emailReg= /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/;
var passwordReg= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var symbolsReg = /([@"'(.?*+^$#()_-])/;
var numReg = /[0-9]/;
var addressReg = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/;

var fields = {
    fullname: false,
    email:false,
    password: false,
    password2: false,
    age:false,
    phoneNumber: false,
    address: false,
    residence:false,
    postal:false,
    dni:false,
}

function nameValidation() {
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
fullnameInput.addEventListener('blur', nameValidation);

function clearFullnameMsg () {
    fullnameMsg.style.display= 'none';
}
fullnameInput.addEventListener('focus', clearFullnameMsg);
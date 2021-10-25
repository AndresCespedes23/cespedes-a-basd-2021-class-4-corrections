var registerForm = document.getElementById('form');

var formInputs = document.getElementsByClassName('formInput');
var fullnameInput = document.getElementById('fullnameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var password2Input = document.getElementById('password2Input');
var ageInput = document.getElementById('ageInput');
var phoneInput = document.getElementById('phoneInput');
var addressInput = document.getElementById('addressInput');
var residenceInput = document.getElementById('residenceInput');
var postalInput = document.getElementById('postalInput');
var dniInput = document.getElementById('dniInput');

var fullnameMsg = document.getElementById('errMsgFullname');
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

var sendButton = document.getElementById('sendButton');

var fullnameReg = /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/;
var emailReg= /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/;
var passwordReg= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var symbolsReg = /([@"'(.?*+^$#()_-])/;
var numbersReg = /[0-9]/;
var addressReg = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/;

var fields = {
    fullname: false,
    email: false,
    password: false,
    password2: false,
    age: false,
    phoneNum: false,
    address: false,
    residence: false,
    postal: false,
    dni: false,
}

//fullname
function fullnameValidation() {
    if (fullnameInput.value.match(fullnameReg) && fullnameInput.value.length >= 6)  {
        fullnameInput.style.border = '2px solid green';
        fullnameMsg.style.display = 'none';
        fields['fullname'] = true;
    } else {
        fullnameInput.style.border = '2px solid red';
        fullnameMsg.style.display = 'block';
        fields['fullname'] = false;
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
        fields['phoneNum'] = true;
    } else {
        phoneInput.style.border = '2px solid red';
        phoneMsg.style.display = 'block';
        fields['phoneNum'] = false;
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

//residence
function residenceValidation () {
    if (residenceInput.value.length >= 3) {
        residenceInput.style.border = '2px solid green';
        residenceMsg.style.display = 'none';
        fields['residence'] = true;
    } else {
        residenceInput.style.border = '2px solid red';
        residenceMsg.style.display = 'block';
        fields['residence'] = false;
    }
}
residenceInput.addEventListener('blur', residenceValidation);

function clearResidenceMsg() {
    residenceMsg.style.display = 'none';
}
residenceInput.addEventListener('focus', clearResidenceMsg);

//postal code
function postalValidation () {
    if (postalInput.value.length >= 3 ) {
        postalInput.style.border = '2px solid green';
        postalMsg.style.display = 'none';
        fields['postal'] = true;
    } else {
        postalInput.style.border = '2px solid red';
        postalMsg.style.display = 'block';
        fields['postal'] = false;
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

//submit form
registerForm.onsubmit= function(e) {
    e.preventDefault();
    //client-side validation
    if (
    fields ['fullname'] && 
    fields ['email'] && 
    fields ['password'] && 
    fields ['password2'] && 
    fields ['age'] && 
    fields ['phoneNum'] && 
    fields ['address'] && 
    fields ['residence'] && 
    fields ['postal'] && 
    fields ['dni']
    ) { 
         alert('Subscription process successful. Your user data is:' + '\n' + 
         'Fullname: ' + fullnameInput.value + '\n' + 
         'Email: ' + emailInput.value + '\n' + 
         'Age: ' + ageInput.value + '\n' + 
         'Phone Number: ' + phoneInput.value + '\n' + 
         'Address: ' + addressInput.value + '\n' + 
         'Residence: ' + residenceInput.value + '\n' + 
         'Postal Code: ' + postalInput.value + '\n' + 
         'DNI: ' + dniInput.value);

    } else {
        alert('Subscription process failed. Please check your data and try again.');
    } 
    //server-side validation
    var url = `http://curso-dev-2021.herokuapp.com/newsletter?name=${fullnameInput.value}&email=${emailInput.value}&password=${passwordInput.value}&password2=${password2Input.value}&age=${ageInput.value}&phone=${phoneInput.value}&address=${addressInput.value}&residence=${residenceInput.value}&postal=${postalInput.value}&dni=${dniInput.value}`

    fetch(url)
    .then(function(res) {
        console.log(res)
        return res.json();
    })
    .then(function(data){
        console.log(data)
        modalSuccess(data)
        saveDataLocal(data);
        
    }) 
    .catch(function(error) {
        console.log(error)
        modalError(error)
    })
function modalSuccess(_data){
    modalMsg.innerHTML = "<p style='color: green'>Congratulations, you've been subscribed sucessfully!<i class='fas fa-check-circle'></i></p>";
}

function modalError(_error){
    modalMsg.innerHTML = "<p style='color: red'><i class='fas fa-exclamation-circle'></i> Subscription process failed!</p>";
}
}
//modal
var modal = document.getElementById('dataModal');
var modalMsg = document.getElementById('modal-msg');

function modalOpen() {
    modal.style.display = 'block';
}
sendButton.addEventListener('click', modalOpen)

function modalClose() {
    modal.style.display = 'none';
}
modal.addEventListener('click', modalClose);

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
}

//save data on local storage
function saveDataLocal(data) {
    localStorage.setItem('name', data.name);
    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
    localStorage.setItem('password2', data.password2);
    localStorage.setItem('age', data.age);
    localStorage.setItem('phone', data.phone);
    localStorage.setItem('address', data.address);
    localStorage.setItem('residence', data.residence);
    localStorage.setItem('postal', data.postal);
    localStorage.setItem('dni', data.dni);
}  

//Complete the form with data from local storage. When refreshing the browser the the form is still completed. (ternary operator)
window.onload = function localDataCompleteForm () {
    localStorage.getItem('name') !== null ? fullnameInput.value = localStorage.getItem('name') : null;
    localStorage.getItem('email') !== null ? emailInput.value = localStorage.getItem('email') : null;
    localStorage.getItem('password') !== null ? passwordInput.value = localStorage.getItem('password') : null;
    localStorage.getItem('password2') !== null ? password2Input.value = localStorage.getItem('password2') : null;
    localStorage.getItem('age') !== null ? ageInput.value = localStorage.getItem('age') : null;
    localStorage.getItem('phone') !== null ? phoneInput.value = localStorage.getItem('phone') : null;
    localStorage.getItem('address') !== null ? addressInput.value = localStorage.getItem('address') : null;
    localStorage.getItem('residence') !== null ? residenceInput.value = localStorage.getItem('residence') : null;
    localStorage.getItem('postal') !== null ? postalInput.value = localStorage.getItem('postal') : null;
    localStorage.getItem('dni') !== null ? dniInput.value = localStorage.getItem('dni') : null;
}







window.onload = function() {
    
    //fullname validation

    function fullnameValidationForm() {
        
        var error = document.getElementsByClassName('error-msg');
    
        var success = document.getElementsByClassName('fa-check-circle');
        
        var fullnameInputText = document.getElementsByTagName('input-fullname').value;

        
        if (fullnameInputText.lenght <= 6 && fullname.indexOf(' ') <= 0) {
            error.style = 'visibility: visible';
        } else {
            success.style = 'visibility: visible';
        }
    }
    
    
    


}


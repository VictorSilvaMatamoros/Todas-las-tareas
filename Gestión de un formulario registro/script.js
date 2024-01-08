document.addEventListener('DOMContentLoaded', function () {
    let nombreInput = document.getElementById('nombre');
    let telefonoInput = document.getElementById('telefono');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirm-password');
    let termsCheckbox = document.getElementById('terms');
    let submitButton = document.querySelector('input[type="submit"]');

    const nombrePattern = /^[a-zA-Z\s]{1,20}$/;
    const telefonoPattern = /^\d{9}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    function validarEntrada(entrada, patron) {
        const valorEntrada = entrada.value.trim();
        if (patron.test(valorEntrada)) {
            entrada.style.border = '1px solid green';
            return true;
        } else {
            entrada.style.border = '1px solid red';
            return false;
        }
    }

    function setValidity(input, isValid) {
        if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    }

    function checkFormValidity() {
        const isNombreValid = validarEntrada(nombreInput, nombrePattern);
        const isTelefonoValid = validarEntrada(telefonoInput, telefonoPattern);
        const isPasswordValid = validarEntrada(passwordInput, passwordPattern);
        const isConfirmPasswordValid = validarEntrada(confirmPasswordInput, passwordPattern);
        const isTermsChecked = termsCheckbox.checked;
        const isPasswordMatch = passwordInput.value === confirmPasswordInput.value; // Verificar si las contraseñas coinciden

        const isFormValid = isNombreValid && isTelefonoValid && isPasswordValid && isConfirmPasswordValid && isTermsChecked && isPasswordMatch;
        
        submitButton.disabled = !isFormValid;
    }

    // Deshabilitar el botón de envío al cargar la página
    submitButton.disabled = true;

    nombreInput.addEventListener('blur', function () {
        validarEntrada(nombreInput, nombrePattern);
        checkFormValidity();
    });

    telefonoInput.addEventListener('blur', function () {
        validarEntrada(telefonoInput, telefonoPattern);
        checkFormValidity();
    });

    passwordInput.addEventListener('blur', function () {
        validarEntrada(passwordInput, passwordPattern);
        checkFormValidity();
    });

    confirmPasswordInput.addEventListener('blur', function () {
        validarEntrada(confirmPasswordInput, passwordPattern);
        checkFormValidity();
    });

    termsCheckbox.addEventListener('change', checkFormValidity);

    document.getElementById('registration-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Formulario enviado con éxito.');
    });
});

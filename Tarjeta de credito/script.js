document.addEventListener('DOMContentLoaded', function () {
    const nombreEntrada = document.getElementById('nombre');
    const numeroEntrada = document.getElementById('numero');
    const fechaEntrada = document.getElementById('fecha');
    const cvvEntrada = document.getElementById('cvv');
    const botonEnviar = document.querySelector('input[type="submit"]');
  
    const patronNombre = /^(MasterCard|Visa|American Express)$/i;
    const patronFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const patronCvv = /^[0-9]{3}$/;
  
    // Expresiones regulares para cada tipo de tarjeta
    const patronMastercard = /^5[1-5][0-9]{14}$/;
    const patronVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const patronAmex = /^3[47][0-9]{13}$/;
  
    const opcionesValidas = ["mastercard", "visa", "american express"];
  
    function validarEntrada(entrada, patron) {
      const valorEntrada = entrada.value.replace(/\s/g, ''); // Eliminar espacios en blanco
      if (patron.test(valorEntrada)) {
        entrada.style.border = '1px solid green';
        return true;
      } else {
        entrada.style.border = '1px solid red';
        return false;
      }
    }
  
    function validarFormulario() {
      const esNombreValido = validarEntrada(nombreEntrada, patronNombre);
      let esNumeroValido = false;
  
      if (esNombreValido) {
        const valorNombre = nombreEntrada.value.toLowerCase();
        if (valorNombre === "mastercard") {
          esNumeroValido = validarEntrada(numeroEntrada, patronMastercard);
        } else if (valorNombre === "visa") {
          esNumeroValido = validarEntrada(numeroEntrada, patronVisa);
        } else if (valorNombre === "american express") {
          esNumeroValido = validarEntrada(numeroEntrada, patronAmex);
        }
      }
  
      const esFechaValida = validarEntrada(fechaEntrada, patronFecha);
      const esCvvValido = validarEntrada(cvvEntrada, patronCvv);
  
      // Verificar si todos los campos son válidos para habilitar o deshabilitar el botón de enviar
      if (esNombreValido && esNumeroValido && esFechaValida && esCvvValido) {
        botonEnviar.disabled = false;
      } else {
        botonEnviar.disabled = true;
      }
    }
  
    // Agregar eventos de entrada a todos los campos
    nombreEntrada.addEventListener('input', validarFormulario);
    numeroEntrada.addEventListener('input', validarFormulario);
    fechaEntrada.addEventListener('input', validarFormulario);
    cvvEntrada.addEventListener('input', validarFormulario);
  
    // Verificar si el valor del nombre coincide con las opciones permitidas
    nombreEntrada.addEventListener('input', function () {
      const valorNombre = nombreEntrada.value.toLowerCase();
      if (!opcionesValidas.includes(valorNombre)) {
        // Si el valor del nombre no coincide con las opciones permitidas, borrar el contenido
        nombreEntrada.style.border = '1px solid red';
      }
    });
});

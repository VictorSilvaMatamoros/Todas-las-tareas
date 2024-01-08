var tiempoRestante = 10;

function iniciarCuentaAtras() {
    var reloj = document.getElementById('reloj');
    reloj.innerHTML = "Tiempo restante: " + tiempoRestante + " segundos";

    var intervalId = setInterval(function() {
        tiempoRestante--;
        if (tiempoRestante >= 0) {
            reloj.innerHTML = "Tiempo restante: " + tiempoRestante + " segundos";
        } else {
            clearInterval(intervalId);
            reloj.innerHTML = "¡Tiempo agotado!";
        }
    }, 1000);
}

iniciarCuentaAtras();

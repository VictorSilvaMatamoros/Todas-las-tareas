function cifrarMensaje() {
    const inputText = document.getElementById('input').value.toUpperCase();
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i);

        if (char === ' ') {
            outputText += ' ';
        } else if (char === 'Z') {
            outputText += 'A';
        } else if (char >= '0' && char < '9') {
            const digit = parseInt(char, 10);
            outputText += (digit + 1).toString();
        } else if (char === '9') {
            outputText += '0';
        } else {
            outputText += String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }

    document.getElementById('output').textContent ="El mensaje cifrado es: " + outputText;

    // Cambiamos la imagen aquí
    const image = document.getElementById('image');
    image.src = 'https://pbs.twimg.com/media/DnASVN4W0AAAEE7.jpg';
}

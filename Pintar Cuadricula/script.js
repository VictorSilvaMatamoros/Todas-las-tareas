for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', function () {
            // Cambiar el color de fondo a uno aleatorio
            const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            gridItem.style.backgroundColor = randomColor;

            // Restaurar el color original después de 1 segundo
            setTimeout(() => {
                gridItem.style.backgroundColor = '';
            }, 1000);
        });
        document.querySelector('.grid-container').appendChild(gridItem);
    }
}

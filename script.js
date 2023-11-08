document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('main-form');
    const parte1 = document.getElementById('parte1');
    const parte2 = document.getElementById('parte2');
    const nextButton = document.getElementById('nextButton');
    const voltarButton = document.getElementById('voltarButton');
    const enviarButton = document.getElementById('enviarButton');

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        parte1.style.display = 'none';
        parte2.style.display = 'block';
        voltarButton.style.display = 'block';
        nextButton.style.display = 'none';
        enviarButton.style.display = 'block';
    });

    voltarButton.addEventListener('click', function (e) {
        e.preventDefault();
        parte2.style.display = 'none';
        parte1.style.display = 'block';
        voltarButton.style.display = 'none';
        nextButton.style.display = 'block';
        enviarButton.style.display = 'none';
    });

    enviarButton.addEventListener('click', function (e) {
        e.preventDefault();
        // Processar o envio do formulário, conforme mencionado no exemplo anterior.
    });
});
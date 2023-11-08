document.addEventListener('DOMContentLoaded', function () {
    const parte1 = document.getElementById('parte1');
    const parte2 = document.getElementById('parte2');
    const nextButton = document.getElementById('nextButton');
    const voltarButton = document.getElementById('voltarButton');

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        parte1.style.display = 'none';
        parte2.style.display = 'block';
        voltarButton.style.display = 'block';
        nextButton.style.display = 'none';
        document.getElementById('enviarButton').style.display = 'block';
    });

    voltarButton.addEventListener('click', function (e) {
        e.preventDefault();
        parte2.style.display = 'none';
        parte1.style.display = 'block';
        voltarButton.style.display = 'none';
        nextButton.style.display = 'block';
        document.getElementById('enviarButton').style.display = 'none';
    });
});
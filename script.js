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


document.querySelectorAll('.open-modal-button').forEach(function (button) {
  button.addEventListener('click', function () {
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
    var bodyOverlay = document.getElementById('bodyOverlay');
    bodyOverlay.style.display = 'block';
  });
});
document.querySelectorAll('.faq-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
    var bodyOverlay = document.getElementById('bodyOverlay');
    bodyOverlay.style.display = 'block';
  });
});


// Função para fechar o modal e ocultar o fundo com desfoque
document.querySelector('.modal img').addEventListener('click', function () {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
  var bodyOverlay = document.getElementById('bodyOverlay');
  bodyOverlay.style.display = 'none';
});

// Função para fechar o modal ao clicar fora do modal e ocultar o fundo com desfoque
window.addEventListener('click', function (event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
      modal.style.display = 'none';
      var bodyOverlay = document.getElementById('bodyOverlay');
      bodyOverlay.style.display = 'none';
  }
});


var corOriginal = " linear-gradient(to right, var(--orange) 50%, var(--gray) 50%)"; // Guarde a cor original
var divs = document.querySelectorAll(".dive");
var receiveDiv = document.querySelectorAll(".receive-div");
var prgReceive = document.querySelectorAll(".prg-receive");
var step2 = document.querySelectorAll(".step2");

function mudarCor() {
  divs.forEach(function(div) {
    div.style.background = '#F08237';

  });

  receiveDiv.forEach(function(div) {
    div.style.border = '2px solid #F08237';
    
  });

  prgReceive.forEach(function(div) {
    div.style.color = '#F08237';
    
  });
  
  step2.forEach(function(div) {
    div.style.color = '#fff';
    
  });

  
}

function reverterCor() {
  divs.forEach(function(div) {
    div.style.background = corOriginal;
  });

  receiveDiv.forEach(function(div) {
    div.style.border = '2px solid #94887F';
    
  });

  prgReceive.forEach(function(div) {
    div.style.color = '#94887F';
    
  });
}




  //dropdown 
  const drops = document.querySelectorAll(".dropdown");

  drops.forEach((drop) => {
      drop.addEventListener("click", () => {
          drop.classList.toggle("active");
      })
  })


  // form
//   const button = document.getElementById('enviarButton');
// const addloading =( )=>{
//   button.innerHTML = '<img src="./assets/loading.png" class="loading">';
// }

//   const handleSubmit =(event)=>{
//     event.preventDefault();
//     addloading();

//     const valorEnergia = document.querySelector('input[name=valorEnergia]').value;
//     const nome = document.querySelector('input[name=nome]').value;
//     const cnpj = document.querySelector('input[name=cnpj]').value;
//     const email = document.querySelector('input[name=email]').value;
//     const telefone = document.querySelector('input[name=telefone]').value;

  
//     fetch("https://api.sheetmonkey.io/form/mWvqJcDsHokFHrfeK3fUt2",{
//       method: 'post',
//       headers:{
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({nome, email, valorEnergia, cnpj, telefone})
//     } ) .then(response => {
//       if (response.ok) {
//         window.location.href = './obrigado.html';
//       }
//     })
//     .catch(error => {
//       console.error('Erro ao enviar o formulário:', error);
//     });
//   }

//   document.querySelector('form').addEventListener('submit', handleSubmit);



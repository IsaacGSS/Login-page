document.body.addEventListener('keydown', function (event) {

const key = event.key;
let form = document.querySelector('form');
let div = document.querySelector('#login-page');
let usuario = document.querySelector('#usuario').value;
let senha = document.querySelector('#senha').value;

    if (key === 'Enter') {

        // console.log(usuario);

        if (usuario && senha) {

            div.innerHTML = `<h2>Ola, ${usuario}</h2>`

             // form.addEventListener('submit', function(e){});   
        }

       
    }

  });
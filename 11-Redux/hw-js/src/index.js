const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento,incrementoImpar  } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  valor.innerHTML = store.getState().contador
  valor.style.color = store.getState().contador > 0 ? 'green' : 'red'


  // Obtenemos la propiedad 'contador' de nuestro store:
  
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
}


// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);



// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
let incrementar = document.getElementById('incremento');
incrementar.addEventListener('click', () => {
  store.dispatch(incremento());
});
let decrementar = document.getElementById('decremento');
decrementar.addEventListener('click', () => {
  store.dispatch(decremento());
});
let impar = document.getElementById('incrementoImpar');
impar.addEventListener('click', ()=> {
  store.dispatch(incrementoImpar());
})
let async = document.getElementById('incrementoAsync');
async.addEventListener('click', ()=> {
  setTimeout(() => {
    store.dispatch(incremento());
  }, 1000);
})
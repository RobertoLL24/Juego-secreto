let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// tenemos varaibles de alcanze global como esta.


//------------------ inner.HTML ------------------------
/* lo que estamos haciendo aqui es simplificar el codigo de conexion con HTML, declaramos una funcion con la cual vamos a poder
asignar texto a un elemento <h1>, <p>, etc... sin la necesidad de crear tantas lineas de codigo como se mira en el ejemplo de abajo:*/

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    // el querySelector, document e inner.HTML nos permite hacer esa conexion entre el JS y HTML

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
let parrafo = document.querySelector( 'p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // tenemos que convertir el valor de la variable numero usuario a numero con parseInt
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acerto el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // hacemos uso del operador ternario para la asignacion de texto
        
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;

        limpiarCaja();
    }
    /* estamos haciendo una comparacion que se va a imprimir en consola y nos va a retornar un valor boolenao (verdadero/falso)
     el triple igual nos dice, tiene que ser iguales en valor como en tipo de dato*/
    return;
    // es una buena practica agregar el return  a una funcion, aunque a veces no va a retornar ningun valor
}




function limpiarCaja(){
   document.querySelector('#valorUsuario').value = ''; 
    // se obtiene la informacion mediante ID '#', este es el ID de nuestro Input
    // para un valor vacio se coloca las dos comillas solas ''  
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto :o');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    // nuestros mensajes  iniciales quedan dentro de una funcion como buena practicay para poder mandar a llamarlos con facilidad
    /*finalemte mandamos a llamar a la funcion textoelemento para a un elemento poder asignarle un texto */
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // mensaje de inicio de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    
    //deshabilitar el boton de nuevo jueego 
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    /*invertimos el valor de nuestro boton para desactivalor, la funcion .setAttribute
    nos permite hacerlo recibiendo dos parametros, en este caso disable y true*/
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    
    
    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
     // si el numero generado esta incluido en la lista 
     if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}


condicionesIniciales();
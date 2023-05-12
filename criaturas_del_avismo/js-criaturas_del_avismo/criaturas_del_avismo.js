const seccionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const seccionReicicio = document.getElementById('boton_reinicio')
const botonMonstruoJugar = document.getElementById("boton-monstruos")
botonRiniciar = document.getElementById('boton_reinicio')
seccionSeleccionarAtaque.style.display = 'none'


const seccionSeleccionarMascota = document.getElementById('seleccionar_monstruos')
const spanMascotaJugador = document.getElementById('monstruo_jugador')

const spanMascotaEnemigo = document.getElementById('monstruo_enemigo')

const spanVidasJugador = document.getElementById('vidas_jugadoe')
const spanVidasEnemigo = document.getElementById('vidas_enemigo')

const seccionMensajes = document.getElementById('resultadoss')
const ataquesJugador = document.getElementById('ataques-Jugador')
const ataquesEnemigo = document.getElementById('ataques-Enemigo')
const contenedor_tarjetas = document.getElementById('contenedor_tarjetas')
const contenedorAtaque = document.getElementById('contenedorAtaque')

let mostruoss = []
let ataqueJugador 
let ataqueEnemigo 
let opcionMonstruos
let inputGorgoroth  
let inputZillax 
let inputNecronius 
let monstruoJugador
let ataquesMonstruos
let botonFuego 
let botonAgua 
let botonTierra 
let vidasJugador = 3
let vidasEnemigo = 3

class Mostruos{
    constructor(
        nombre, foto, vida) {
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
            this.ataques = []
        }
}

let Gorgoroth  = new Mostruos('Gorgoroth', './monstris/Gorgoroth.png', 5)

let Zillax = new Mostruos ('Zillax', './monstris/Zillax.png', 5)

let Necronius = new Mostruos ('Necronius', './monstris/Necronius.png', 5)

Gorgoroth.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '☘️', id: 'boton-tierra'}
)

Zillax.ataques.push(
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}
)

Necronius.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'}
)

mostruoss.push(Gorgoroth, Zillax, Necronius)


function iniciarJuego() {
    
    

    mostruoss.forEach((mostruo) => {
        opcionMonstruos = `
        <input type="radio"  name="monstruos" id=${mostruo.nombre} />
        <label class="tarjeta_Monstruo" for=${mostruo.nombre}>
            <p>${mostruo.nombre} </p>
            <img src=${mostruo.foto} alt=${mostruo.nombre}>
        </label>
        `
    contenedor_tarjetas.innerHTML += opcionMonstruos

     inputGorgoroth = document.getElementById('Gorgoroth')
     inputZillax = document.getElementById('Zillax')
     inputNecronius = document.getElementById('Necronius')

    })

    
    botonMonstruoJugar.addEventListener('click', seleccionarMascotaJugador)
    
    botonRiniciar.addEventListener('click',  reiniciarJuego)
}

function seleccionarMascotaJugador() {
   
    seccionSeleccionarMascota.style.display = 'none'
    seccionSeleccionarAtaque.style.display = 'flex'

    if (inputGorgoroth.checked) {
        spanMascotaJugador.innerHTML= inputGorgoroth.id
        monstruoJugador = inputGorgoroth.id
    }
     else if (inputZillax.checked) {
        spanMascotaJugador.innerHTML= inputZillax.id
        monstruoJugador = inputZillax.id
    } 
    else if (inputNecronius.checked) {
        spanMascotaJugador.innerHTML= inputNecronius.id
        monstruoJugador = inputNecronius.id
    } 
    else {
        alert('Selecciona una monstruo')
    }

    extraerAtaques(monstruoJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(monstruoJugador) {
    let ataques;
    for (let i = 0; i < mostruoss.length; i++) {
        if (monstruoJugador === mostruoss[i].nombre) {
            ataques = mostruoss[i].ataques;
        }
    }
    
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) =>{
        ataquesMonstruos = `
        <button id=${ataque.id} class="botonAtaque">${ataque.nombre}</button>
        `
        contenedorAtaque.innerHTML += ataquesMonstruos
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     
     botonFuego.addEventListener('click', ataqueFuego)
     botonAgua.addEventListener('click', ataqueAgua)
     botonTierra.addEventListener('click', ataqueTierra)
        
    
        
}


function seleccionarMascotaEnemigo() {
    let selccionMascotaAleatoria = aleatorio(0, mostruoss.length -1)
    
    spanMascotaEnemigo.innerHTML = mostruoss[selccionMascotaAleatoria].nombre
    
}

function ataqueFuego() {
    ataqueJugador  = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador  = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador  = "TiERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let atacqueAleatorio = aleatorio(1,3)

    if (atacqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }
    
    else if ( atacqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }

    else {
        ataqueFuego = "TIERRA"
    }

    combate()
}


function combate() {
    
    if (ataqueEnemigo == ataqueJugador) {
        craerMensajes("EMPATE 😒")
    }
    else if (ataqueEnemigo == "FUEGO" && ataqueJugador =="TIERRA"){
        craerMensajes("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if ( ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        craerMensajes("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        craerMensajes ("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else{
        craerMensajes("PERDISTE 😭")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeVidaFinal("¡FELICITACIONES! Ganastes 🎉🎉🎉")
    }
    else if (vidasJugador == 0){
        crearMensajeVidaFinal('Lo siento Perdistes 😭😭😭 ')
    }
    
}

function craerMensajes(resultado) {
    
    let nuevoAtaqueJugador  = document.createElement('p')
    let nuevoAtaqueEnemigo  = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    
 
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)

}

function crearMensajeVidaFinal(resultadosVidas) {
    
    seccionMensajes.innerHTML = resultadosVidas
    botonFuego.disabled= true
    botonAgua.disabled= true
    botonTierra.disabled= true
    seccionReicicio.style.display = 'block'


}

function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min+1)+ min)
}



window.addEventListener('load', iniciarJuego)
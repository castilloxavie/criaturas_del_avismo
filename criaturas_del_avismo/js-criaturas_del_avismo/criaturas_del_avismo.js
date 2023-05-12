const seccionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const seccionReicicio = document.getElementById('boton_reinicio')
const botonMonstruoJugar = document.getElementById("boton-monstruos")
const botonRiniciar = document.getElementById('boton_reinicio')
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

const seccionMapa = document.getElementById('verMapa')
const canvasMapa = document.getElementById('mapa')

let mostruoss = []
let ataqueJugador 
let ataqueEnemigo = []
let opcionMonstruos
let inputGorgoroth  
let inputZillax 
let inputNecronius 
let monstruoJugador
let ataquesMonstruos
let ataqueMonstruosEnemigos
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJUgador
let indexAtaqueEnmigo
let victoriasJUgador = 0
let victoriasEnemigo = 0
let ataqueJugadors = []
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

class Mostruos{
    constructor(
        nombre, foto, vida) {
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
            this.ataques = []
            this.x = 20
            this.y =30
            this.alto = 80
            this.ancho = 80
            this.mapafoto = new Image()
            this.mapafoto.src = foto
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
    
    seccionSeleccionarAtaque.style.display = 'none'
    seccionMapa.style.display = 'none'
    

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
    //seccionSeleccionarAtaque.style.display = 'flex'
    seccionMapa.style.display = 'flex'
    

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
    let ataques
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
        <button id=${ataque.id} class="botonAtaque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaque.innerHTML += ataquesMonstruos
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')

     
}

function secuenciaAtaque() {
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugadors.push('FUEGO')
                console.log(ataqueJugadors)
                boton.style.background = '#00FFFF'
                boton.disabled= true
                
            }
            else if (e.target.textContent === '💧'){
                ataqueJugadors.push('AGUA')
                console.log(ataqueJugadors)
                boton.style.background = '#7FFFD4'
                boton.disabled= true
            }
            else{
                ataqueJugadors.push('TIERRA')
                console.log(ataqueJugadors)
                boton.style.background = '#000000'
                boton.disabled= true
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}


function seleccionarMascotaEnemigo() {
    let selccionMascotaAleatoria = aleatorio(0, mostruoss.length -1)
    
    spanMascotaEnemigo.innerHTML = mostruoss[selccionMascotaAleatoria].nombre
    ataqueMonstruosEnemigos = mostruoss[selccionMascotaAleatoria].ataques
    secuenciaAtaque()
    
}

function ataqueAleatorioEnemigo() {
    let atacqueAleatorio = aleatorio(0, ataqueMonstruosEnemigos.length -1)

    if (atacqueAleatorio == 0 || atacqueAleatorio == 1 ){
        ataqueEnemigo.push("FUEGO")
    }
    
    else if ( atacqueAleatorio == 3 || atacqueAleatorio == 4 ){
        ataqueEnemigo.push("AGUA")
    }

    else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueAleatorioEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugadors.length === 5) {
        combate()
    }
}

function indesAmbosOponentes(jugador, enemigo) {
    indexAtaqueJUgador = ataqueJugadors[jugador]
    indexAtaqueEnmigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let index = 0; index < ataqueJugadors.length; index++) {
        if (ataqueJugadors[index]===ataqueEnemigo[index]) {
            indesAmbosOponentes(index, index)
            craerMensajes("EMPATE 😒😒😒")
        
        }
        else if (ataqueJugadors[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' ){
            indesAmbosOponentes(index, index)
            craerMensajes("GANASTE 🎉🎉🎉")
            victoriasJUgador++
            spanVidasJugador.innerHTML = victoriasJUgador
        }
        else if (ataqueJugadors[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO')  {
            indesAmbosOponentes(index, index)
            craerMensajes("GANASTE 🎉🎉🎉")
            victoriasJUgador++
            spanVidasJugador.innerHTML = victoriasJUgador
            
        }
        else if (ataqueJugadors[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indesAmbosOponentes(index, index)
            craerMensajes("GANASTE 🎉🎉🎉")
            victoriasJUgador++
            spanVidasJugador.innerHTML = victoriasJUgador

        }
        else {
            indesAmbosOponentes(index, index)
            craerMensajes("PERDISTE 😭😭😭")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
   
    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJUgador === victoriasEnemigo){
        crearMensajeVidaFinal("¡EMPATE! 😒😒😒")
    }
    else if (victoriasJUgador > victoriasEnemigo){
        crearMensajeVidaFinal("¡FELICITACIONES! ganaste 🎉🎉🎉")
    }
    else{
        crearMensajeVidaFinal("¡PERDISTE! 😭😭😭 ")
    }
    
}

function craerMensajes(resultado) {
    
    let nuevoAtaqueJugador  = document.createElement('p')
    let nuevoAtaqueEnemigo  = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJUgador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnmigo

    
 
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)

}

function crearMensajeVidaFinal(resultadosVidas) {
    
    
    seccionMensajes.innerHTML = resultadosVidas

    

    seccionReicicio.style.display = 'block'


}

function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min+1)+ min)
}

function pintarPersonaje() {
    lienzo.clearReact(0,0,width, mapa.heigth)
    lienzo.drawImage(
        Gorgoroth.mapaFoto,
        Gorgoroth.x,
        Gorgoroth.y,
        Gorgoroth.ancho,
        Gorgoroth.alto
        
    )
}
function moverGorgoroth(params) {
    Gorgoroth.x = Gorgoroth.x + 5
    pintarPersonaje()
}

window.addEventListener('load', iniciarJuego)
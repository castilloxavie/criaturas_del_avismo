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
let monstruoJugadorObjeto
let ataquesMonstruos
let ataqueMonstruosEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJUgador
let indexAtaqueEnemigo
let victoriasJUgador = 0
let victoriasEnemigo = 0
let ataqueJugadors = []
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground. src = '/monstris/mosntromap.png'
let alturaBuscamos
let anchoMapa = window.innerWidth - 20
const anchoMaxMapa = 350

if (anchoMapa > anchoMaxMapa){
    anchoMapa = anchoMaxMapa - 20
}

alturaBuscamos = anchoMapa * 600 / 800
mapa.width = anchoMapa
mapa.height = alturaBuscamos

class Mostruos{
    constructor(
        nombre, foto, vida, fotoMapa) {
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
            this.ataques = []
            this.alto = 40
            this.ancho = 40
            this.x = aleatorio(0,mapa.width - this.ancho )
            this.y = aleatorio(0, mapa.height - this.alto)
            this.mapafoto = new Image()
            this.mapafoto.src = fotoMapa
            this.velocidadX = 0
            this.velocidadY = 0
        }
        pintarMosntruosEnemigos(){
            lienzo.drawImage(
                this.mapafoto,
                this.x,
                this.y,
                this.ancho,
                this.alto
            )
        }
}

let Gorgoroth  = new Mostruos('Gorgoroth', './monstris/Gorgoroth.png', 5, '/monstris/Gorgoroth_hear.png')

let Zillax = new Mostruos ('Zillax', './monstris/Zillax.png', 5, '/monstris/Zillax_hear.png')

let Necronius = new Mostruos ('Necronius', './monstris/Necronius.png', 5, '/monstris/Necronius_hear.png')

let GodzillaEne  = new Mostruos('Gorgoroth', './monstris/Gorgoroth.png', 5, '/monstris/Gorgoroth_hear.png')

let MomiaEne = new Mostruos ('Zillax', './monstris/Zillax.png', 5, '/monstris/Zillax_hear.png')

let KrakenEne = new Mostruos ('Necronius', './monstris/Necronius.png', 5, '/monstris/Necronius_hear.png')

Gorgoroth.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '☘️', id: 'boton-tierra'}
)
GodzillaEne.ataques.push(
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
MomiaEne.ataques.push(
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
KrakenEne.ataques.push(
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
    seccionMapa.style.display = 'flex'
    iniciarMapa()
    
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


function seleccionarMascotaEnemigo(enemigo) { 
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataqueMonstruosEnemigo = enemigo.ataques
    secuenciaAtaque()
    
}

function ataqueAleatorioEnemigo() {
    console.log("atques del enemigo");
    let atacqueAleatorio = aleatorio(0, ataqueMonstruosEnemigo.length -1)

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


function pintarCanvas() {
    monstruoJugadorObjeto.x = monstruoJugadorObjeto.x + monstruoJugadorObjeto.velocidadX
    monstruoJugadorObjeto.y = monstruoJugadorObjeto.y + monstruoJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    monstruoJugadorObjeto.pintarMosntruosEnemigos()
    GodzillaEne.pintarMosntruosEnemigos()
    MomiaEne.pintarMosntruosEnemigos()
    KrakenEne.pintarMosntruosEnemigos()
    if(
        monstruoJugadorObjeto.velocidadX !==0 ||
        monstruoJugadorObjeto.velocidadY !==0
    ){
        revisarChoques(GodzillaEne)
        revisarChoques(MomiaEne)
        revisarChoques(KrakenEne)
    }
     
}

function moverDerecha() {
    monstruoJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    monstruoJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    monstruoJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    
    monstruoJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    
    monstruoJugadorObjeto.velocidadX = 0
    monstruoJugadorObjeto.velocidadY = 0
}

function sePresionoTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            
            
        case 'ArrowDown':
            moverAbajo()
            break

        case 'ArrowLeft':
            moverIzquierda()
            break

        case 'ArrowRigth':
            moverDerecha()
            break

        default:
            break
    }
}

function iniciarMapa() {
    
    monstruoJugadorObjeto = obtenerObjetoMascota(monstruoJugador)
    console.log(monstruoJugadorObjeto, monstruoJugador);
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoTecla)
    window.addEventListener('keyup', detenerMovimiento)
    
}
 function obtenerObjetoMascota() {
    for (let i = 0; i < mostruoss.length; i++) {
        if (monstruoJugador === mostruoss[i].nombre) {
            return mostruoss[i]
        }
    }
 }

 function revisarChoques(enemigo) {
    const arribaEnemigo = enemigo.y
    const abaojoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMonstruo = monstruoJugadorObjeto.y
    const abajoMonstruo = monstruoJugadorObjeto.y + monstruoJugadorObjeto.alto
    const derechaMostruo = monstruoJugadorObjeto.x + monstruoJugadorObjeto.ancho
    const izquierdaMostruo = monstruoJugadorObjeto.x
    if(
       abajoMonstruo  < arribaEnemigo ||
       arribaMonstruo > abaojoEnemigo ||
       derechaMostruo < izquierdaEnemigo ||
       izquierdaMostruo > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("sedectecto");
    seccionSeleccionarAtaque.style.display = 'flex'
    seccionMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    
 }

window.addEventListener('load', iniciarJuego)
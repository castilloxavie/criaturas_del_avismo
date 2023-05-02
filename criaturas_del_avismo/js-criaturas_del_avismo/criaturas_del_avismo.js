let ataqueJugador =""
let ataqueEnemigo =""
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seccionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReicicio = document.getElementById('boton_reinicio')
    seccionReicicio.style.display = 'none'


    let botonMonstruoJugar = document.getElementById("boton-monstruos")
    botonMonstruoJugar.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonRiniciar = document.getElementById('boton_reinicio')
    botonRiniciar.addEventListener('click',  reiniciarJuego)

}

function seleccionarMascotaJugador() {
    let seccionSeleccionarMascota = document.getElementById('seleccionar_monstruos')
    seccionSeleccionarMascota.style.display = 'none'

    let seccionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    seccionSeleccionarAtaque.style.display = 'flex'

    let inputGorgoroth = document.getElementById('Gorgoroth')
    let inputZillax = document.getElementById('Zillax')
    let inputNecronius = document.getElementById('Necronius')
    let spanMascotaJugador = document.getElementById('monstruo_jugador')

    if (inputGorgoroth.checked) {
        spanMascotaJugador.innerHTML='Gorgoroth'
    }
     else if (inputZillax.checked) {
        spanMascotaJugador.innerHTML='Zillax'
    } 
    else if (inputNecronius.checked) {
        spanMascotaJugador.innerHTML='Necronius'
    } 
    else {
        alert('Selecciona una monstruo')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let selccionMascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('monstruo_enemigo')


    if ( selccionMascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Gorgoroth'
    }
    else if ( selccionMascotaAleatoria ==2){
        spanMascotaEnemigo.innerHTML = 'Zillax'
    }
    else{
        spanMascotaEnemigo.innerHTML = 'Necronius'
    }
    
    
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
    let spanVidasJugador = document.getElementById('vidas_jugadoe')
    let spanVidasEnemigo = document.getElementById('vidas_enemigo')

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
    let seccionMensajes = document.getElementById('resultadoss')
    let ataquesJugador = document.getElementById('ataques-Jugador')
    let ataquesEnemigo = document.getElementById('ataques-Enemigo')

    let nuevoAtaqueJugador  = document.createElement('p')
    let nuevoAtaqueEnemigo  = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    
 
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)

}

function crearMensajeVidaFinal(resultadosVidas) {
    let seccionMensajes = document.getElementById('resultadoss')

    seccionMensajes.innerHTML = resultadosVidas

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled= true
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled= true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled= true


    let seccionReicicio = document.getElementById('boton_reinicio')
    seccionReicicio.style.display = 'block'


}

function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min+1)+ min)
}



window.addEventListener('load', iniciarJuego)
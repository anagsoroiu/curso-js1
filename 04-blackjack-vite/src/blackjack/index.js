import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora } from './usecases/index';

// import crearDeck, {miNombre} from './usecases/crear-deck';
// import {crearDeck as crearNuevoDeck} from './usecases/crear-deck'; 

// console.log(miNombre);

// Función anónima autocreada
const miModulo = (() => {
    'use strict'

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

const smalls = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');


deck = crearDeck(tipos, especiales);

// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
    
    deck = crearDeck(tipos, especiales);
    
    puntosJugadores = [];
    for(let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    smalls.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerText = '');

    btnPedir.disabled = false; 
    btnDetener.disabled = false; 
}

// Turno: 0 = primer jugador y el último será la computadora
const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smalls[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
}

const determinarGanador = () => {
    const [puntosMinimos, puntosC] = puntosJugadores;
    
    setTimeout(() =>{
        if(puntosC === puntosMinimos) {
            alert('Nadie gana');
        } else if(puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosC > 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 100);
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
        console.warn('Lo siento, has perdido');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('¡Has ganado!');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores[0]);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});

return {
    nuevoJuego: inicializarJuego
};
})();

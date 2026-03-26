import { pedirCarta } from "./";


/**
 * Esta función hace que el computador intente ganar al jugador
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganarç
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, deck = []) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    
    let puntosC = 0;
    
    do {
        const carta = pedirCarta(deck);
        puntosC = acumularPuntos(carta, puntosJugadores.length -1);
        crearCarta(carta, puntosJugadores.length -1);
    } while((puntosC < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador();
} 
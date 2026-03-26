/**
 * Esta función pide cartas
 * @param {Array<String>} deck un arreglo de cartas 
 * @returns {String} retorna un sting
 */
export const pedirCarta = (deck) => {
    if(deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}
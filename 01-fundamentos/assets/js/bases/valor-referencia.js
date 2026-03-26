let a = 10;
let b = a;
a = 30;

console.log({a, b});

let juan = {nombre: 'Juan'};
// los ... son un operador spread, haciendo el efecto contrario
// que a continuacion
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

// en el caso de usar los ... aqui, es un parametro rest
//que une todos los parametros en uno
// sin estar dentro del {}
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({tony, peter});

// Arrays
const frutas = ['Manzana', 'Piña', 'Fresa'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
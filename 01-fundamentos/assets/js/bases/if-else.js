let a = 1;

if (a >= 10){
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); // 0 es domingo, lunes es 1...

console.log(dia);

if (dia === 0) {
    console.log('Es domingo');
} else if (dia === 1){
    console.log('Es lunes');
} else if (dia === 2) {
    console.log('Es martes');
} else {
    console.log('No es lunes, martes o domingo');
}

// Sin usar if else o switch, unicamente obletos
// imprimir dias de la semana

dia = 10;

// const diaLetras = ['Domingo', 'Lunes', 'Martes',
//      'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];

const diaLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
}

// dia de la semana
console.log(diaLetras[dia] || 'Día no válido');

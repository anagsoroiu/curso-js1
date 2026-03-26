class Persona {
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); // undefined
        console.log('Hola a todos soy un método estático');
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = "Sin nombre", codigo = "Sin codigo", frase = "Sin frase") {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favortida de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y soy ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy un héroe');
const ironman = new Persona('Tony Stark', 'IronMan', 'Soy ironman');

// console.log(ironman);

// spiderman.quienSoy();
// // ironman.quienSoy();

// spiderman.miFrase();

spiderman.setComidaFavorita = 'El pastel de cereza de la tía Mei';
// spiderman.nemesis = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);
// Persona._conteo = 2;

console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);




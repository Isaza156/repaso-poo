const pelicula1 = {
    nombre: 'Harry',
    id: 01,
    reproducir() {
        return `Reproduciendo pelicula... ${this.nombre}`; // Al usar la palabra this es porque queremos acceder a un elemento dentro el objeto.
    }
}
console.log(pelicula1.reproducir()); // Cuando ponemos el punto (.) entre pelicula1 y reproducir indicamos que vamos a acceder a una propiedad del objeto pelicula1, en este caso accedemos a una función.


const pelicula2 = {
    nombre: 'IronMan',
    id: 02,
    reproducir() {
        return `Reproduciendo pelicula... ${this.nombre}`;
    }
}
console.log(pelicula2.reproducir());

// Todo lo anterior es el metodo tradicional que posiblemente no funciona con grandes datos por la cantidad de lineas que se tendrian que copiar.




// Una clase es una "plantilla" de objetos, es un molde que tenemos. Siempre empieza con letra MAYÚSCULA el nombre de la clase.

class Pelicula {
    constructor(nombre, id) { // nombre y id son propiedades o parametros de nuestro objeto. Solo podemos tener un constructor dentro de una clase.
        this.nombre = nombre;
        this.id = id;
    }
    // En la poo las funciones se llaman métodos (reproducir) y podemos tener infinidad de metodos.
    reproducir() {
        return `Reproduciendo pelicula... ${this.nombre}`;
    }
}


// HERENCIA: La palabra extends indica que va a usar o heredar las propiedades de la clase Pelicula, en este caso la clase Serie tiene en comun las propiedades de Pelicula.


class Serie extends Pelicula { // Serie tiene sus propios metodos y propiedades.
    constructor(nombre, id, cap) { // nombre y id estan siendo heredados.
        super(nombre, id); // Con el super decimos que vamos a utilizar el nombre y id de la herencia.
        this.cap = cap; // cap es propiedad unica de Serie.
    }
    reproducirCapitulo() {
        return `Reproduciendo capitulo ${this.cap}... ${this.nombre}`;
    }
}


// Instanciar un objeto es crear un objeto.
// Cuando ponemos la palabra new hacemos incapié o nos referimos a la "plantilla" ( clase ).
// Los parentesis de Pelicula son los parametros que enviamos al constructor.


const peliculaUno = new Pelicula('Harry', 1); // Creado el objeto a traves de una clase.
const peliculaDos = new Pelicula('IronMan', 2); // Creado el objeto a traves de una clase.
const serieUno = new Serie('Dexter', 3, 55); // Creado el objeto a traves de una clase.


console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo());




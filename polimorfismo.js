//1.POLIMORFISMO

//Es la capacidad de una clase para tomar diferentes formas o comportarse de diferentes maneras a traves de una interfaz comun.

//permite que objetos de diferentes clases que heredan de una misma clase base puedan ser tratados como objetos de la clase base cuando se interactua con ellos. Esto permite que el codigo sea mas flexible y reusable, ya que un mismo meodo puede ser inviodcado en diferentes objetos y producir resultados especificos segun el tipo de objeto que lo este implementando.

//2. HERENCIA

//Permite que una clase (llamada subclase) herede propiedades y metodos de otra clase (llamada clase base o superclase) . Esto permite reutilizar codigo y crear una jerarquia de clases.En javascript, se utiliza la palabra clave "extends" para establecer la herencia.

//ejemplo:

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //metodo de la clase
  saludar() {
    //contenido del metodo aca

    console.log(
      "hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años"
    );
  }
}

class Empleado extends Persona {
  constructor(nombre, edad, cargo) {
    super(nombre, edad);
    //llama al constructor de la calse base (Persona).
    this.cargo = cargo;
  }

  presentarse() {
    console.log(
      "Hola, soy " +
        this.nombre +
        ", tengo " +
        this.edad +
        " años y soy " +
        this.cargo
    );
  }
}

const empleado1 = new Empleado("Pedro", 40, "Desarrollador");
empleado1.saludar(); //Output: Hola, minombre es Pedro y tengo 35 años.
empleado1.presentarse(); //Output: Hola, soy Pedro, tengo 35 años y soy desarrollador.

//SUPER se utiliza en la herencia de clases en javascript parar acceder a los metodos y propiedades de la superclase desde la subclase, permitiendo una extension y personalizacion de la funcionalidad heredada.

//EJEMPLO 2

//Definicion de la superclase animal 
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        return "haciendo sonidos genericos";
    }
}

// Definicion de la subclase Perro que extiende Animal

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre) ; //Llamamos al constructor de la superclase usando super ()
        this.raza = raza;
    }

    hacerSonido() {
        return "guau, guau";
    }

    moverCola() {
        return "moviendo la cola felizmente";
    }
}

//Creacion de una instancia de la subclase Perro
const miPerro = new Perro ("firulais", "labrador");

//Llamando a los metodos de la subcalse y superclase
console.log (miPerro.nombre); // Salida: "Firulais"
console.log (miPerro.raza);// Salida: "Labrador"
console.log (miPerro.hacerSonido());// Salida: "guau, guau!"
console.log ( miPerro.moverCola());// Salida: "Moviendo la cola felizmente"

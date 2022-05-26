class Persona {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }

    esMayor(){
        if(this.edad >= 18){
            return true;
        }
        return false;
    }

    getPromEdad(personas){
        let suma = 0;
        let promedio = 0;
        for(let x = 0; x<personas.length;x++)
        {
            suma = suma+(personas[x].edad);
        }
        promedio = suma/personas.length;
        return promedio;
    }
}

// instancia del objeto
var persona1 = new Persona("Elon",10); 
var persona2 = new Persona("Tim",12); 
var persona3 = new Persona("Steve",18); 
var persona4 = new Persona("Erick",40); 
var persona5 = new Persona("Camila",21); 

// ya puedo llamar a los metodos en los objetos
persona1.esMayor();
persona2.esMayor();
persona3.esMayor();
persona4.esMayor();
persona5.esMayor();

// creo un array de personas
var personas = [persona1,persona2,persona3,persona4,persona5];

// se puede llamar al metodo para el promedio de edades desde cualquier objeto
persona1.getPromEdad(personas);
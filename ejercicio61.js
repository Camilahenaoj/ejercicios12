class Telefono {
    constructor(numTel, llamadas) {
    this.numTel = numTel;
    this.llamadas = llamadas;
    }

    llamar(){
        this.llamadas += 1;
    }
}

// instancia del objeto
var telefono1 = new Telefono(3105632121,0); 

// ya puedo llamar a los metodos en los objetos
telefono1.llamar();

// visualizar el aumento en las llamadas
telefono1.llamadas;
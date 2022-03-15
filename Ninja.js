class Ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 3;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(`Mi nombre es ${this.nombre}`);
    }

    showStats(){
        console.log(`Mi nombre es ${this.nombre}
            Mi salud actual es ${this.salud}
            Mi velocidad actual es ${this.velocidad}
            Mi fuerza actual es ${this.fuerza}`);
    }

    drinkShake(){
        this.salud +=10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkShake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }

    speakWisdom(){
        super.drinkShake();
        console.log("Acaba de darte un mensaje una rata.")
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

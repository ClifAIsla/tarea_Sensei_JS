class Carta{
    constructor (name,costo){
        this.name = name;
        this.costo = costo;
    }
}

class Unidad extends Carta{
    constructor (name,costo,resistencia,poder){
        super(name,costo);
        this.resistencia = resistencia;
        this.poder = poder;
    }

    atack( objetivo ){
        // Mapaeamos las habilidades del enemigo
        // objetivoVida =  objetivo.resistencia;
        // objetivoAtaque = objetivo.poder;

        //NUestra carta pierde vida
        this.resistencia -=objetivo.poder

        //La carta enemiga tambien pierde vida
        // objetivoVida -= this.poder;
        objetivo.resistencia -= this.poder;
    }
    
    status(){
        console.log(`La carta ${this.name}, tiene PODER ${this.poder} y RESISTENCIA ${this.resistencia}`)
    }
}

const elfoOscuro = new Unidad("Elfo Oscuro",10,3,5)
const elfoMecanico = new Unidad("Elfo Mecanico",5,6,2)

elfoOscuro.status()
elfoMecanico.status()

//PROBEMOS LOS ATAQUES
elfoOscuro.atack(elfoMecanico)

console.log("-----------DESPUES DEL ATAQUE-----------")

console.log("-----------EL ELFO OSCURO ATACO-----------")

elfoOscuro.status()
elfoMecanico.status()

class Efecto extends Carta{
    constructor (name,costo,stat,magnitud,cantidad){
        super(name,costo);
        this.stat = stat; //Cartaque afecta la resistencia o poder
        this.magnitud = magnitud; //carta que incrementa o dismuye un stat
        this.cantidad = cantidad;  //en cuanto incrementa la carta
    }
    // stat -> puede ser resistencia o poder
    play( objetivo ) {
            if( objetivo instanceof Unidad ) {
                
                if (this.stat == "resistencia"){
                    if(this.magnitud == "incrementar"){

                        objetivo.resistencia += this.cantidad;
                    }
                    else{
                        objetivo.resistencia -= this.cantidad;
                    }
                }
                if (this.stat == "poder"){
                    if(this.magnitud == "incrementar"){

                        objetivo.poder  += this.cantidad;
                    }
                    else{
                        objetivo.poder -= this.cantidad;
                    }
                }

            } else {
                throw new Error( "El objetivo debe ser una unidad!" );
            }
        }

    descripcion(){
        console.log(`La carta ${this.name}, ${this.magnitud} la ${this.stat} del objetivo en ${this.cantidad}.`)
    }
}

const dublicaElImpacto = new Efecto("Duplica El Impacto",4,"poder","incrementar",6)
const reduceAtaque = new Efecto("Reduce ataque",2,"poder","reduce",3)

console.log("-----------PROBAMOS CARTAS DE EFECTOS-----------")

dublicaElImpacto.descripcion()
dublicaElImpacto.play(elfoOscuro)
elfoOscuro.status()
reduceAtaque.play(elfoOscuro)
elfoOscuro.status()



console.log("-----------ES HORA DEL DUELO -----------")
//Unidad(name,costo,resistencia,poder)
const ninjaRojo = new Unidad("Ninja Cinturón Rojo",3,4,3)
const ninjaNegro = new Unidad("Ninja Cinturón Negro",4,4,5)

//Carta(name,costo,stat,magnitud,cantidad)
const algoritmoDifícil = new Efecto("Algoritmo Difícil",2,"resistencia","incrementar",3)
const rechazoPromesa = new Efecto("Rechazo de promesa no manejado",1,"resistencia","reducir",2)
const programacionPareja = new Efecto("Programación en pareja",3,"poder","incrementar",2)

//El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"
console.log("-------TURNO JUGADOR 1--------")
ninjaRojo.status()
algoritmoDifícil.play(ninjaRojo)
ninjaRojo.status()

console.log("-------TURNO JUGADOR 2--------")
ninjaNegro.status()
rechazoPromesa.play(ninjaNegro)
ninjaNegro.status()

console.log("-------TURNO JUGADOR 1--------")
ninjaRojo.status()
programacionPareja.play(ninjaRojo)
ninjaRojo.atack(ninjaNegro)
ninjaRojo.status()
ninjaNegro.status()


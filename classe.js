class Personagem {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    
    static tipoDeAtaque(type) {
        if (type === "mago") {
            return "magia";
        } else if (type === "Guerreiro") {
            return "espada grande";
        } else if (type === "Ninja") {
            return "Katana";
        } else if (type === "Clérigo") {
            return "Raio";
        } else if (type === "Monge") {
            return "Artes Marciais";
        }
    }

    escrever() {
        let ataque = Personagem.tipoDeAtaque(this.type);
        console.log(`A classe ${this.type} atacou usando ${ataque}`);
    }
}

let player = new Personagem("Rodrigo192", 18, "mago");
let player1 = new Personagem("Ghost", 19, "Guerreiro");
let player2 = new Personagem("Ghost1213", 21, "Ninja")

player.escrever(); // A classe mago atacou usando magia
player1.escrever(); // A classe Guerreiro atacou usando espada grande
player2.escrever();




//exercicio feito em aula no dia 09/12/21 por Maysa Pereira, Cibele Martins e Milena Souza

class Gatinho {
    constructor(nomeGato, idadeGato, sexoGato){
        this.nome = nomeGato
        this.idade = idadeGato
        this.sexo = sexoGato
    }

        miar(){
            console.log(`${this.nome} está miando! Miaaaau`)
        }

        comer(){
            console.log(`Deu fome! ${this.nome} está comendo`)
        }
}

const gatinho1 = new Gatinho("coquinha", 1, "fem")
// Em javascript, no momento, todos os atributos são públicos, podemos ter acesso a eles mesmo fora da classe
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome; // this._nome, this.atributo = parâmetro
        this.sobrenome = sobrenome;
    }
}

class Carro {
    constructor(modelo){
        // em javascript todos os atributos são public, podemos acessá-los fora da classe
        this.marca = 'Honda'; // atributo fixo 
        this.modelo = modelo
    }
}

console.log(Carro.marca);
console.log(this.marca);
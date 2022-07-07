function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá 
    ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}
const pessoa2 = {
    nome: "Carla",
    idade: 26
}
const animal = {
    nome: "Cachorro",
    idade: 3,
    raca: 'pug'
}

console.log(calculaIdade.call(pessoa2, 30));

//apply
console.log(calculaIdade.apply(animal, [5]));
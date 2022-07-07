const pessoa = {
    nome: 'Cadete',
    idade: 32,
    profissao: 'desenvolvedor'
}

pessoa.idade = 33;

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao //? opcional
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 18,
    profissao: Profissao.Desenvolvedora
}

const maria: Estudante = {
    nome: 'Maria',
    idade: 18,
    materias: ['Matematica', 'logica']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(maria.materias);
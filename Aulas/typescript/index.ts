function soma(a: number, b: number) { //definir o tipo parametro
    return console.log(a + b);
}

soma(1, 1);

//**********************//

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico',
    domestico: boolean
}

interface IFelino extends IAnimal {
    garras: boolean,
    rugido(alturaEmDecibeis: number): void;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

const animal: IAnimal = {
    nome: 'peixe',
    tipo: "aquatico",
    domestico: true
}

const felino: IFelino = {
    nome: 'gato',
    tipo: 'terrestre',
    garras: true,
    domestico: true,
    rugido: (alturaEmDecibeis) => (`${alturaEmDecibeis} db`)
}

type IDomestico = IFelino | ICanino; //usado tbm para fazer juncoes &&

const novoAnimal: IDomestico = {
    nome: 'peixe',
    porte: 'pequeno',
    tipo: "aquatico",
    domestico: true
}

//**********************//

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    //console.log(i.value);
});

//**********************//

//Generic types

function adicioonaALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicioonaALista([1, 2, 3], 4)

//**********************//

//validacao

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'analista'
}

interface IAdmin extends IUsuario {
    tipo: 'admin';
}

const usuario: IAdmin = {
    id: '123',
    email: 'asd@asd',
    tipo: 'admin',
    cargo: 'gerente'
}

function redireciona(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        return console.log('area de adm');
    }
    console.log('area user padrao');
}

redireciona(usuario);
console.log(usuario.cargo)
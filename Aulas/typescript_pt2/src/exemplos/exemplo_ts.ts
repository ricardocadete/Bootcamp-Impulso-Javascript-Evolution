let button = document.getElementById('button');
let campo1 = document.getElementById('input1') as HTMLInputElement;
let campo2 = document.getElementById('input2') as HTMLInputElement;

function sum2(num1: number, num2: number, devePrintar: boolean, frase: string) {
    let result = num1 + num2;
    if (devePrintar){
        return console.log(frase + result);
    }   
}

let devePrintar = true;
let frase = 'O valor é: '

if (button) { // se botao existir
    button.addEventListener('click', () => {
        if (campo1 && campo2) {
            sum2(Number(campo1.value), Number(campo2.value), devePrintar, frase); // para usar value as variaveis precisam ser HTMLinput..
        }
    })
}

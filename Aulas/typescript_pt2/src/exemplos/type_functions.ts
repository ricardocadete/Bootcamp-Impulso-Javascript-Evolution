type input = number | string; // criar um tipo

function somaVal(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return console.log(input1.toString() + input2.toString());
    } else {
        return console.log(input1 + input2);
    }
    
}
somaVal(1, 1);
somaVal('a', 'b');
somaVal(2, '3');


//funcao que retorna um tipo
function somaVal2(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(somaVal2(10, 10));


//funcoes do tipo VOID nao retornam nada


//callback
function somaValEtratar(num1: number, num2: number, callback: (numero: number) => number): number {
    let result = num1 + num2;
    return callback(result); //usa o result como parametro da callback que é uma funcao
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

console.log(somaValEtratar(3, 5, aoQuadrado))
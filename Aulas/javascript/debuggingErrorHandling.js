function validation (array, number) {
    try{
        if (array == null && number == null) { //(!arr && !num)
            throw new ReferenceError('funcao chamada sem parametros'); //ReferenceError
        }
        if (typeof(array) !== 'object') {
            throw new TypeError("Array precisa ser do tipo object") //TypeError
        }
        if (typeof(number) !== 'number') {
            throw new TypeError("Array precisa ser do tipo number") //TypeError
        }
        if (array.length == num) {
            throw new RangeError("Tamanho invalido") //TypeError
        }
        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Reference Error")
            console.log(e.message)
        }else if(e instanceof TypeError) {
            console.log("Type Error")
            console.log(e.message)
        }else if(e instanceof RangeError) {
            console.log("Range Error")
            console.log(e.message)
        }else {
            console.log("Erro nao esperado " + e)
        }
    }
}

const NovoErro = new Error();

NovoErro.name = "Novo Erro";
NovoErro.message = "Este erro nunca ocorreu"

var arr = [];
var num = 1;

validation([1, 2, 3, 4, 5], 5);
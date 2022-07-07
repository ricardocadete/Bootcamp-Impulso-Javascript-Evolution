const ErrorMsg = new Error('Valor precisa ser um numero');
ErrorMsg.name = 'Not a number'

var num = 'b';

if (isNaN(num)) {
    throw ErrorMsg;
} else {
    return console.log('é um número')
}


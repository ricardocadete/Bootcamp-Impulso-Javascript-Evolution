let unknownValor: unknown = 'teste'
let varString: string = 'recebeString'

//erro ao tentar atribuir um unknown direto a uma var
//varString = unknownValor;

//para atribuir, o valor precisa ser tratado antes
if (varString === unknownValor) {
    varString = unknownValor;
}


function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('ERRO!!', 500);
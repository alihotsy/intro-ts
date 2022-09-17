

function queTipoSoy<T>(argumento:T):string{
    return argumento.toString();
}

let soyString = queTipoSoy('Hola Mundo');
let soyNum = queTipoSoy(100);
let soyArry = queTipoSoy([1,5,9,6,3]);

let soyExplicito = queTipoSoy<number>(155);
// Utilizamos o map para realizar transformações em um array, para aplicar transformações nos valores do array
// Vamos mapear o array valores para um novo com o dobro dos valores
// O map gera um novo array de mesmo tamanho que o original

let valores = [2, 4, 6, 8, 10];
console.log(valores);

//não altera o array original valores:
let dobro = valores.map(function(valor){
    return valor * 2;
});

console.log(dobro);


function dobrar(valor){
    return valor * 2;
}

dobro = valores.map(dobrar);
console.log(dobro);
console.log(valores); console.log();

// Encadeando maps para realizar múltiplas transformações

function soma_4(valor){
    return valor + 4;
}


function dividir_por_5(valor){
    return valor / 5;
}

let resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado); console.log();

/*
 Passo 1 -> dobrar = [4, 8, 12, 16, 20]
 Passo 2 -> soma_4 = [8, 12, 16, 20, 24]
 Passo 2 -> dividir_por_5 = [1.6, 2.4, 3.2, 4, 4.8]
*/

// forEach e map
// forEach -> para cada elemento vamos executar alguma coisa, o map também
// A grande diferença é que o forEach não gera (não retorna) um novo array, o map gera

function soma_6(valor){
    console.log(valor + 6);
}

function soma_8(valor){
    return valor + 8;
}


valores.forEach(soma_6);


resultado1 = valores.map(soma_8);
console.log(resultado1);
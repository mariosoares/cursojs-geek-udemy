var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
];

//console.log(cursos);
console.log(cursos.length); console.log();

// definir uma função
//function imprimir(curso, indice, array)
function imprimir(curso, indice){
    console.log(indice + ' - ' + curso);
    //console.log(array);
}

// para cada elemento dentro do array curso passe eles para função imprimir
// forEach itera para cada um dos elementos
// o forEach pode passar para função 3 parâmetros: elemento, índice e array
cursos.forEach(imprimir); console.log();

// utilização de uma função anônima (lambda/callback) e template string
// declarando e executando a função dentro do forEach
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`); 
}); console.log();

// iterando o array sem forEach
for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}

console.log();
// Exemplo de um site

let arrayNumeros = [1,2,3,4,5,6];
function verificaPares(elemento){
    if (elemento % 2 == 0) 
    console.log(elemento);
}
arrayNumeros.forEach(verificaPares); // saída 2 4 6
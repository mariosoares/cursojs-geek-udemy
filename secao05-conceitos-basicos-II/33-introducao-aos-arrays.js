/*
array contendo 5 elementos -> n = 5

// índices -> posição do elemento no array
[0][1][2][3][4]

//valores em um array
[12]['Geek'][true][48][52]

// Detalhes sobre arrays
- Possuem tamanho infinito*
- Podemos colocar qualquer tipo de dado
*/

// Vetores -> Matrizes unidimensionais. // Arrays são objetos indexados

// Forma 1
let alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
// let alunos = ['Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia'];
console.log(alunos);

// Forma 2 [Recomendada]
let notas = [1, 3, 5, 7, 9];
console.log(notas);

// Criando um array vazio
let dados = [];
console.log(dados);

// Fazendo acesso ao valor de um índice
console.log(notas[2]); 

// Alterando o valor a partir do índice
notas[2] = 12;
console.log(notas);

// Atenção ao acessar um valor com um índice que não existe
notas[9] = 10; // Não existe!
console.log(notas);

if(notas[5] == undefined){
    notas[5] = 54;
}

console.log(notas[5]); // 54
console.log(notas); // agora três items empty
//console.log(notas[6]); // undefined
//console.log(notas[7]); // undefined
//console.log(notas[8]); // undefined
//console.log(notas[9]); // 10

//console.log(notas[5] == undefined); // false

// Inserindo elementos no final do array
let nomes = ['Paula', 'Maria', 'Julia'];
console.log(nomes);

nomes.push('Vanessa'); // insere o valor no final do array
console.log(nomes);

// Tamanho do array
//console.log(nomes.length); // 4
let tam = nomes.length;

console.log(tam); // 4
console.log(); console.log('Ordenando arrays: \n')
// Ordenar os dados de um array
let alunos1 = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'mário', 'ana', 'Ana', 'Carla'];
console.log(alunos1);

alunos1.sort(); // Ordenando array de strings, primeiro os maiúsculos
console.log(alunos1);

let precos = [123.55, 42.27, 546.99, 23.12];
console.log(precos);

// precos.sort(); // ATENÇÃO Ordenação de floats não funciona assim!
// console.log(precos);
precos.sort(function(a, b) {return a - b;});
//console.log(precos);

let idades = [5, 1, 8, 12, 44, 78];
//console.log(idades);

//idades.sort(); // ATENÇÃO Ordenação de ints não funciona assim!
//console.log(idades);
idades.sort(function(a, b){return a - b;});
console.log(idades);
console.log(); console.log('Deletando dados de um array: \n');

// Deletando dados de um array
delete idades[3];
console.log(idades);

idades[3] = 12;
console.log(idades);

idades.splice(3, 2); // A partir do índice 3, delete 2 elemento
console.log(idades);

idades.splice(3, 0, 56, 89); // A partir do índice 3, não delete nenhum, mas adicione 56, 89
console.log(idades);

idades.splice(3, 1, 23); // A partir do índice 3, deleta 1, e adiciona 23
console.log(idades);
idades[3] = 23;
console.log(); console.log('Iterar em um array: \n');

// Iterar em um array
idades = [ 1, 5, 8, 23, 89, 78 ];
let texto = ' ';
for(let i = 0; i < idades.length; i++){
   //console.log(idades[i]);
   texto += idades[i] + ' ';
}
console.log(texto);
console.log(); console.log('Removendo e inserindo elementos: \n')

// Removendo elementos da última posição do array
// idades.pop(); //remove e retorna o último elemento de um array
console.log('idades original:', idades);
let retPop = idades.pop(); //remove e retorna o último elemento de um array
console.log('Retirado o último elemento:', retPop);
console.log('idades sem o elemento retirado:', idades);
console.log('= = = =')
// Removendo o primeiro elemento de um array
//idades.shift(); //remove e retorna o primeiro elemento de um array
idades = [ 1, 5, 8, 23, 89, 78 ];
console.log('idades original:', idades);
let retShift = idades.shift();
console.log('Retirado o primeito elemento:', retShift);
console.log('idades sem o elemento retirado:', idades);
console.log();


// Inserindo elementos no início de um array
idades = [ 1, 5, 8, 23, 89 ];
idades.unshift(99); 
console.log('idades unshift:', idades);

// retorna um novo array a partir do índice informado
let novo = idades.slice(2);
console.log(novo);

idades = [ 1, 5, 8, 23, 89 ];
console.log(idades);
novo = idades.slice(1, 4); //a partir do índice 1, pegue até o índice 4 sem incluí-lo
console.log(novo); console.log();

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); // concatena os dois arrays
console.log(rest);

rest = impares.concat(pares);
console.log(rest);

rest.sort(function(a, b){return a - b;});
console.log(rest); console.log();


// 4 x 4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

/*
    [
        [ 1,  2,  3,  4], // linha 0
        [ 5,  6,  7,  8], // linha 1
        [ 9, 10, 11, 12], // linha 2
        [13, 14, 15, 16]  // linha 3
    ]
*/

console.log(tabuleiro[0][0]); // linha 0 coluna 0 -> 1
console.log(tabuleiro[2][2]); // linha 2 coluna 2 -> 11



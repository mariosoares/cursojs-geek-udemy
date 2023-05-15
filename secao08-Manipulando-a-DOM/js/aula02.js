// o innerText recupera e define o conteúdo da tag como texto simples, enquanto innerHTML
// recupera e define o conteúdo em formato HTML.


let a = document.querySelector('.link');

//console.log(a.innerText);
//console.log(a.innerHTML);

//console.log(a.parentNode); //body


//console.log(a.parentNode.parentNode); //html

//console.log(a.parentNode.parentNode.parentNode);// Document

//console.log(a.parentNode.parentNode.parentNode.parentNode);// null

console.log(a.parentNode.parentNode.childNodes); // head e body, e se tiver espaço entre as tags head e bod
// (conta enter como texto), acrescenta text 

//console.log(a.parentNode.parentNode.firstChild); // head

console.log(a.firstChild); // é o texto 'Lint text'

//console.log(a.parentNode.parentNode.lastChild); // body

//console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling);

console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild); // atentar para os espaços (ENTER) entre as tags

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling); // para que nextSibling seja body, temos que tirar
// o espaço entre head e body


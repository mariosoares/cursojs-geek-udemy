// eventos por meio dos quais o usuário interage com a página
// eventos inline --> aqueles que configuro direto na minha página web

function mostrarAlerta(){
    alert('O botão foi clicado!');
}


function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...';
}

function mudarCor(){
    // #000000 (black), #FFFFFF (branco)
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1);

    // bgColor está obsoleto no HTML de nível 2 do DOM. A alternativa recomendada é o uso do estilo CSS
    // background-color que pode ser acessado através do DOM com document. corpo. estilo.
    //document.bgColor = cores[numero]; //document.bgcolor is deprecated
    document.body.style.backgroundColor = cores[numero];
}

function escreverTexto(input){ // o parâmetro poderia ser qualquer nome
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}

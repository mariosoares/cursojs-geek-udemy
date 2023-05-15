let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

// são funções javascript que não influenciam a linha de tempo da aplicação, são promessas que quando finalizadas
// os dados são apresentados
let promise = function(){ // essa variável poderia ter qualquer nome
    // a função está retornando uma promise, retonrnando a instância de uma classe, classe promise
    return new Promise(function(resolve, reject){ // os argumentos resolve e reject são funções também

        //let github_user = document.querySelector('input[name=github_user]').value;// código original
        let github_user = document.getElementById('git').value; // retornou o valor, não capturou o elemento em si
        let ajax = new XMLHttpRequest(); //criando um novo objeto ajax
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText));
                }else{
                    reject('Não foi encontrato nenhum usuário com este nome.')
                }
            }
        }
    });
}

btn.onclick = function(){
    // Limpar a div
    div.innerHTML = '';

    // Criar o span para colocar o nome do usuário
    let spanNome = document.createElement('span');

    // Criar a variável nome que vai receber o texto do nome do usuário ou a msg de erro no final
    let txtNome = '';

    // Executando a promise
    promise()
        // resolve (sucesso) - o que deve ser executado no sucesso? o que deve ser executado no fracasso?
        // a promise executou com sucesso? .então
        .then(function(response){ //resposnse é argumento da função
            // Se o usuário tem nome
            if(response['name'] !== null){
                txtNome = document.createTextNode(response['name']);

                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuário encontrado não possui nome.');
                //console.log(txtNome);
            }
            // Adiciona o texto ao span e o span à div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode(error);
            //Adiciona o texto ao span e o span à div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });

}
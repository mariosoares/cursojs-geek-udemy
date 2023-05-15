// Ajax (XMLHttpRequest) - Asynchronous JavaScript and XML
// Requisição assíncrona que realizamos em algum backend, requisição que não vai bloquear a tela enquanto acontece

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

// o script vai lá no site do github sem recarregar a página
btn.onclick = function(){

    // Limpar o conteúdo da div
    div.innerHTML = '';

    // Instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    //console.log(ajax.readyState); // 0 --> ainda não abriu a conexão
    // Abrir uma conexão (GET, POST, PUT, DELETE...)
    // Esta função recebe dois argumentos: método HTTP e endereço que você quer acessar
    ajax.open('GET', `https://api.github.com/users/${input.value}`); // input --> variável declarada no início

    //console.log(ajax.readyState); // 1 --> a conexão já foi aberta
    // Enviar a requisição
    ajax.send(null); // o GET não envia dados

    // agora é pegar o resultado:
    ajax.onreadystatechange = function(){

        // Criar elemento span para adicionarmos os dados dos usuários na nossa div
        let spanNone = document.createElement('span');

        // Criar a variável nome para receber o texto do nome do usuário
        let txtNome = '';

        /*
         ajax.readyState -> 0 => Antes da conexão ser aberta
         ajax.readyState -> 1 => Após abrir a conexão
         ajax.readyState -> 2 => headers (cabeçalhos) foram recebidos (os headers são os primeiros dados a serem recebidos)
         ajax.readyState -> 3 => Carregando o corpo da requisição (conteúdo/dados)
         ajax.readyState -> 4 => O conteúdo (dados) está pronto para uso
        */

        if(ajax.readyState === 4){ // status de pronto do ajax, dado encontrado?
            if(ajax.status === 200){ //página encontrada?
                // if (ajax.readyState === 4 && ajax.status === 200)
                // transformar os dados JSON para array
                // usuario <-- dados dos usuários que vieram do github
                usuario = JSON.parse(ajax.responseText); // não seria melhor --> let usuario ...

                // Se o usuário possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                // encontrado, mas não tem nome
                }else{
                    txtNome = document.createTextNode(`O usuário ${input.value} não tem nome.`);
                }
                // Adiciona o texto ao span e o span à div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);

                // Limpar o input
                input.value = '';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                // Adiciona o texto ao span e o span à div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }    

}
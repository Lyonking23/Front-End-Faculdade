let email = document.getElementById ('email');
let senha = document.getElementById ('senha');
let btnEntar = document.getElementById ('btn-entrar');


btnEntar.addEventListener(
    "click", () => {
        let userEmail = email.value;
        let userSenha = senha.value;

        if(!userEmail  || !userSenha ){

alert ("os campos de email é senha são obrigatorios");
return;
        }
        
        autenticar (userEmail, userSenha);
       
    }
);

function autenticar(email, senha) {
    const urlBase = 'http://localhost:3400';

    fetch (`${urlBase}/login`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
    },
    body: JSON.stringify({email, senha})
})
 .then(response => response = response.json())

 .then(response => {
    if(!!response.mensagem) {
        alert (response.mensagem);
        return;
    }else {
        alert ('usuario autenticado com sucesso');

        salvarToken(response.token);
        salvarUsuario(response.usuario);

        window.open('clientes.html','_self')
    }
 })
}

function salvarToken(token){
    localStorage.setItem('token', token)
}
function salvarUsuario(usuario){
    localStorage.setItem('usuario', JSON.stringify(usuario));
}
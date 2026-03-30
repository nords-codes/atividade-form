let form = document.getElementById("formulario");

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementById('moradia').value;
    let moradia_2 = document.getElementById('moradia_2').value;
    let quintal = document.getElementById('quintal').value;
    let quintal_2 = document.getElementById('quintal_2').value;
    let pets = document.getElementById('pets').value;
    let pets_2 = document.getElementById('pets_2').value;
    let motivo = document.getElementById('motivo')

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroTel').textContent = '';
    document.getElementById('erroCpf').textContent = '';
    document.getElementById('erroIdade').textContent = '';
    document.getElementById('erroCidade').textContent = '';
    document.getElementById('erroMotivo').textContent = '';
    


    if (nome.length < 3) {

        document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres.';
        valido = false;

    }
    if (!email.includes('@')) {
        document.getElementById('erroEmail').textContent = 'Email invalido';
        valido = false;

    }
    if (telefone.length < 8) {
        document.getElementById('erroTel').textContent = 'telefone invalida';
        valido = false;
    }
    if(idade < 18){
         document.getElementById('erroIdade').textContent = 'Idade minima é 18'
        valido = false;
    }
    if(motivo < 10){

    }
       
        
    if (valido) {
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `
    Dados enviados: <br>
    nome: ${nome} <br>
    email: ${email} </br>
    senha: ${senha} <br></br>
    `;
        form.reset();
    }
});

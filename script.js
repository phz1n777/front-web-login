const button = document.querySelector("button");
const inputLogin = document.querySelector("#login");
const inputSenha = document.querySelector("#senha");

const clearForm = () => {
  inputLogin.value = '';
  inputSenha.value = '';
}

button.addEventListener(("click"), function(event) {
  event.preventDefault();

  // validações
  if (inputLogin.value.trim() === '') {
    alert("Insira seu login/ Campo obrigatório");
    return false;
  }

  if (inputSenha.value.trim() === '') {
    alert("Insira sua senha/ Campo obrigatório");
    return false;
  }

  clearForm();

});

function logIn() {
  // Obter os valores dos campos de login e senha
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  // Exibir os valores no console
  console.log('Login:', login);
  console.log('Senha:', senha);

}

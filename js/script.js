// CÓDGO DE VALIDAÇÃO DO EMAIL
// ----------------------------------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf('@') == -1 ||
       document.forms[0].email.value.indexOf('.') == -1){
        alert("Por favor, informar um e-mail válido");
        return false;
    }else{
            alert("Email informado");
            document.getElementById('email').innerHTML = document.forms[0].email.value;
        }
    }
     
     
     
     
     
    // ----------------------------------------------------------
     
     
    // CÓDIGO DE VERIFICAÇÃO DO EMAIL DIGITADO
    // ----------------------------------------------------------
     
     
     
    // ----------------------------------------------------------



// adiciona a validação de cpf 
   
 // VALIDAÇÃO DE CPF DIRETO DO JAVASCRIPT
// Adicionando escutador ao formulário
document.getElementById('cpfForm').addEventListener('submit', function(event){
    event.preventDefault();
 
    const cpf = document.getElementById('cpf').value;
    const msg  = document.getElementById('message');
 
    if(validarCPF(cpf)){
    msg.textContent = "O CPF é válido";
    msg.style.color = 'green';
 
    }else{
        msg.textContent = "O CPF é inválido";
        msg.style.color = 'red';
    }
 }
 );
 
 // VALIDAÇÃO DE CPF DIRETO NO JAVASCRIPT
  
 // Adicionando escutador ao formulário
 document.getElementById('cpfForm').addEventListener('submit', function(event){
     event.preventDefault();
  
     const cpf = document.getElementById('cpf').value;
     const msg = document.getElementById('message');
  
     if(validarCPF(cpf)){
         msg.textContent = 'O CPF é válido!';
         msg.style.color = 'green';
     }else{
         msg.textContent = 'O CPF é inválido!';
         msg.style.color = 'red';
     }
 }
 );
  
 function validarCPF(cpf){
     cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  
     // Estrutura de decisão para verificar quantidade de dígitos e se todos os digitos são iguais
     if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
         return false;
     }
    
     let soma = 0;
     let resto;
  
     // Validando o primeiro digito verificador
     for(let i=1;i <= 9;i++){
         soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
     }
  
     resto = (soma * 10) % 11;
  
     if((resto === 10) || (resto === 11)){
         resto = 0;
     }
     if(resto !== parseInt(cpf.substring(9, 10))){
         return false;
     }
  
     soma = 0;
     // Validando o segundo digito verificador
     for(let i = 1; i <= 10; i++){
         soma += parseInt(cpf.substring(i-1, i) * (12 - i));
     }
  
     resto = (soma * 10) % 11;
  
     if((resto === 10) || (resto === 11)){
         resto = 0;
     }
    
     if(resto !== parseInt(cpf.substring(10, 11))){
         return false;
     }
  
     return true;
 }
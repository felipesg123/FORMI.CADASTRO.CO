'use strict'; // Ativa o modo restrito
// Código para consumo de API da ViaCEP
//https://viacep.com.br/
 
 
// Limpar consulta do form já realizada
const limparFormulario = () =>{
    document.getElementById('inputRua').value = '';
    document.getElementById('inputbairro').value = '';
    document.getElementById('inputcidade').value = '';
    document.getElementById('inputestado').value = '';
}
 
//Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('inputRua').value = endereco.logradouro; // Coloca o valor de logradouro da API dentro do campo logradouro do formulário
    document.getElementById('inputbairro').value = endereco.bairro;
    document.getElementById('inputcidade').value = endereco.localidade;
    document.getElementById('inputestado').value = endereco.uf;
}
 
// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); // Expressão regular
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
// Função para consumo de API ViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${inputcep.value}/json/`;
    if(cepValido(inputcep.value)){
        const dados     = await fetch(url);
        const addres    = await dados.json();
 
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }    
    }else{
        alert('CEP Incorreto');
    }
}
// Executa a ação de preenchimento do formulário ao deixar o campo do CEP
document.getElementById('inputcep').addEventListener('focusout', pesquisarCep);

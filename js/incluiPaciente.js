// para mostrar os novos dados temos que escutar o click no botão adicionar

// identificando o botão
const botao_adicionar = document.querySelector('#adicionar-paciente')

// listener com função anônima
botao_adicionar.addEventListener('click', (event)=>{
    event.preventDefault();
    
    // capturando o formulário
    const formulario = document.querySelector('#form-adiciona')
    // capturando a tabela
    const tabela = document.querySelector('#tabela-pacientes')

    // criando uma estrutua de tr (linha da tabela)
    const pacienteTr = document.createElement('tr');
    const nomeTd = document.createElement('td');
    const pesoTd = document.createElement('td');
    const alturaTd = document.createElement('td');
    const gorduraTd = document.createElement('td');
    const imcTd = document.createElement('td');
    
    // adicionando informações usando a propriedade value do formulário
    nomeTd.textContent = formulario.nome.value;
    pesoTd.textContent = formulario.peso.value;
    alturaTd.textContent = formulario.altura.value;
    gorduraTd.textContent = formulario.gordura.value;
    //calculoImc(pesoTd.textContent, alturaTd.textContent, imcTd)

    // montando a estrutura no html
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    tabela.appendChild(pacienteTr)



})
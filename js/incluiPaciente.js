// para mostrar os novos dados temos que escutar o click no botão adicionar

// identificando o botão
const botao_adicionar = document.querySelector('#adicionar-paciente')

// função que busca dados do paciente
const obtemPacienteDoFormulario = (formulario) => {
    // adicionando informações usando a propriedade value do formulário
    // objeto paciente
    const paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value
    }
    return paciente;
}
// função que monta tag <td>
const montaTd = (info, classe) => {
    
    const td  = document.createElement('td');
    td.textContent = info;
    td.classList.add(classe);

    return td
}

// função que monta a tabela
const montaTr = (paciente) => {
     // criando uma estrutua de tr (linha da tabela)
     const pacienteTr = document.createElement('tr');
     pacienteTr.classList.add("paciente")
     const nomeTd = montaTd (paciente.nome, "info-nome")
     const pesoTd =  montaTd (paciente.peso, "info-peso")
     const alturaTd =  montaTd (paciente.altura, "info-altura")
     const gorduraTd =  montaTd (paciente.gordura, "info-gordura")
     const imcTd = montaTd (0,"info-imc")

     calculoImc(pesoTd.textContent, alturaTd.textContent, imcTd)
 
     // montando a estrutura no html
     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);

     return pacienteTr;

}

// listener com função anônima
botao_adicionar.addEventListener('click', (event)=>{
    event.preventDefault();
    
    // capturando o formulário
    const formulario = document.querySelector('#form-adiciona')
    // capturando a tabela
    const tabela = document.querySelector('#tabela-pacientes')
    // criando o paciente
    const paciente = obtemPacienteDoFormulario(formulario)
    // criando o Tr
    const pacienteTr = montaTr(paciente)
    // incluindo o Tr na tabela
    tabela.appendChild(pacienteTr)



})
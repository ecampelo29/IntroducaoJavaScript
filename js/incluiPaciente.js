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
        gordura: formulario.gordura.value,
        imc: calculoImc(formulario.peso.value, formulario.altura.value)
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
 
     // montando a estrutura no html
     pacienteTr.appendChild(montaTd (paciente.nome, "info-nome"));
     pacienteTr.appendChild(montaTd (paciente.peso, "info-peso"));
     pacienteTr.appendChild(montaTd (paciente.altura, "info-altura"));
     pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd (paciente.imc,"info-imc"));

     return pacienteTr;

}

//função para validar os dados do paciente
const validaPaciente = (paciente) => {
    let erros = [];
    if (paciente.nome.length == 0 || paciente.peso.length == 0 || 
        paciente.altura.length == 0 || paciente.gordura.length == 0){
            erros.push("Formulário não aceita dados em branco");
        } else {
            if (!pesoEhValido(paciente.peso)){
                erros.push("Peso Inválido");
            }
            if (!alturaEhValida(paciente.altura)){
                erros.push("Altura Inválida");
            }
        }
    return erros 
}

// função que exibe as mensagens de erros na página
const exibeMensagemDeErro = (mensagensErro) => {
    const ul = document.querySelector(".mensagens-erro")
    ul.innerHTML=""

    mensagensErro.forEach((erro) => {
        const li = document.createElement("li");
        li.textContent = erro
        ul.appendChild(li)
    });
}

// função para resetar as mensagens de erros
const apagaErros = () => {
    const ul = document.querySelector(".mensagens-erro")
    ul.innerHTML = ""
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
    // verificação de mensagens de erro
    const mensagensErro =  validaPaciente(paciente)

    if (mensagensErro.length > 0){
        exibeMensagemDeErro(mensagensErro);
    } else {
        // incluindo o Tr na tabela
        tabela.appendChild(pacienteTr);
        formulario.reset()
        apagaErros()
    }
    
})
//----------------------------funções 

const alteraCorPaciente = (celula) => {
    celula.classList.add('paciente-invalido');
}

// função para checagem de peso
const pesoEhValido = (peso, imcTabela) => {
    if (peso <= 0 || peso >= 500){
        imcTabela.textContent = 'Peso inválido'
        alteraCorPaciente(imcTabela);
        return false
    }
    return true;
}

// função para checagem de altura
const alturaEhValida = (altura, imcTabela) => {
    if (altura <= 0 || altura >= 3.00 ) {
        imcTabela.textContent = 'Altura inválida'
        alteraCorPaciente(imcTabela);
        return false;
    }
    return true;
}

// função que calcula o imc
const calculoImc = (peso, altura, imcTabela) => {
    if (pesoEhValido(peso, imcTabela) && alturaEhValida(altura, imcTabela)){
        imcTabela.textContent = (peso /(altura**2)).toFixed(2);    
    }
}

// busca todos os elementos da tabela cuja classe é ".paciente"
const pacientes = document.querySelectorAll(".paciente");


// parseando nos pacientes da tabela

 for (i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    // localiza o peso
    let peso = paciente.querySelector(".info-peso").textContent;
    // localiza a altura 
    let altura = paciente.querySelector(".info-altura").textContent;
 
    // ---------------------- atualizando a tabela no index.hml (visualmente)

    // localiza a posição na tabela
    imcTabela = paciente.querySelector(".info-imc");

    // cálculo do imc
    calculoImc(peso, altura, imcTabela);

}





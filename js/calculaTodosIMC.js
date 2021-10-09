//----------------------------funções 

const alteraCorPaciente = (celula) => {
    celula.classList.add('paciente-invalido');
}

// função para checagem de peso
const pesoEhValido = (peso) => {
    if (peso <= 0 || peso >= 500){
        return false
    }
    return true;
}

// função para checagem de altura
const alturaEhValida = (altura) => {
    if (altura <= 0 || altura >= 3.00 ) {        
        return false;
    }
    return true;
}

// função para gravação dos erros na tabela existente
const gravaErro = (peso, altura) => {
    if (!pesoEhValido(peso)) {
        return "Peso Inválido"
    }
    if (!alturaEhValida(altura)) {
        return "Altura Inválida"
    }
}

// função que calcula o imc
const calculoImc = (peso, altura) => {
        return (peso /(altura**2)).toFixed(2);    
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

    // validações dos dados
    if (pesoEhValido(peso) && alturaEhValida(altura)){
        imcTabela.textContent = calculoImc(peso, altura);
    } else {
        imcTabela.textContent = gravaErro(peso, altura)
        alteraCorPaciente(imcTabela);
    }

    
}





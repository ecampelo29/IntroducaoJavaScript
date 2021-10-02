
//----------------------------funções 

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

// função que calcula o imc
const calculoImc = (peso, altura) => {
    if (pesoEhValido(peso) && alturaEhValida(altura)){
        return (peso /(altura**2));
    }
    if (!pesoEhValido(peso)) {
        return "Peso inválido" ;       
    } 
    if (!alturaEhValida(altura)) {
        return "Altura inválida";
    }   
    
}


// busca o primeiro paciente
const paciente = document.querySelector("#primeiro-paciente");

// localiza o peso
let peso = paciente.querySelector(".info-peso").textContent;

// localiza a altura 
let altura = paciente.querySelector(".info-altura").textContent;

// cálculo do imc
const imc = calculoImc(peso, altura);

// ---------------------- atualizando a tabela no index.hml (visualmente)
// localiza a posição na tabela

imcTabela = paciente.querySelector(".info-imc");
// altera o valor
imcTabela.textContent = imc;



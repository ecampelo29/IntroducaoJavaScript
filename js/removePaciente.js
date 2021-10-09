// os eventos são escutados por todos os parentes de onde ocorreu até o body. 
// desta forma iremos escutar eventos na tabela
const tabela = document.querySelector(".tabela-pacientes")

// remove o paciente quando houver duplo click com controle de evento
// event.target retorna o elemento que foi afetado pelo evento
tabela.addEventListener("dblclick", (event)=> {
    const alvoEvento = event.target;
    const paiDoAlvo = alvoEvento.parentNode;

    // para melhorar a experiência do usuário inclui-se um fadeout
    paiDoAlvo.classList.add("fadeOut")
    // fução nativa que segura a ação dentro dela pelo tempo em milisegundos
    setTimeout( ()=>{
        paiDoAlvo.remove();
    }, 500)
    
})

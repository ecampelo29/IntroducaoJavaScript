const botaoBuscar = document.querySelector("#buscar-paciente")

botaoBuscar.addEventListener("click", function(){

    // função nativa para conexão com outros servidores/sites
    const con = new XMLHttpRequest();
    // abrindo a conexão
    con.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    // envia o pedido da conexão
    con.send()
    // aguarda o carregamento
    con.addEventListener("load", function(){
        const erroAjax = document.querySelector("#erro-ajax")
        if (con.status == 200) {
            erroAjax.classList.add("invisivel")
            // captura a resposta
            const resposta = con.responseText;
            // transforma a resposta em array de objetos usando função especial JSON
            const pacientes = JSON.parse (resposta);
            // incluindo os pacientes na tabela
            pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente)
            })
        } else {
            console.log(con.status, con.responseText)
            erroAjax.classList.remove("invisivel")
            
        }

    })

})
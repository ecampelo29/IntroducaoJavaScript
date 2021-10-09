const campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    const pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {
        pacientes.forEach((paciente) =>{
            const nome = paciente.querySelector(".info-nome").textContent
            const regex = new RegExp(this.value, "i") //modificador para desconsiderar maíusculo
            if (regex.test(nome)) {
                paciente.classList.remove("invisivel")
            } else {
                paciente.classList.add("invisivel")
            }
        })
    } else {
        pacientes.forEach((paciente) =>{
            paciente.classList.remove("invisivel")
        })
    }

})
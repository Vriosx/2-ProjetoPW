document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const nome = document.querySelector("#nome").value;
    const time = document.querySelector("#time").value;
    const gols = document.querySelector("#gols").value;
    const assistencias = document.querySelector("#assistencias").value;
    const foto = document.querySelector("#foto").value;

    const jogador = {
        nome,
        time,
        gols: parseInt(gols), 
        assistencias: parseInt(assistencias), 
        foto
    };

    
    if (validar(jogador)) {
        console.log(jogador);
        let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

        jogadores.push(jogador);

        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        
        window.location = "/";
    }
    
    criarCardTarefa()
});

function validar(jogador) {
    let valid = true;
    limparErros();

    if (!jogador.nome) {
        document.querySelector("#nome").classList.add("is-error");
        document.querySelector("#nome-error").innerText = "O nome é obrigatório!";
        valid = false
    }if(!jogador.time){
        document.querySelector("#time").classList.add("is-error");
        document.querySelector("#time-error").innerText = "O time é obrigatório!";
        valid = false
    }if(jogador.gols < 0){
        document.querySelector("#gols").classList.add("is-error");
        document.querySelector("#gols-error").innerText = "Não pode ser menor que 0";
        valid = false
    }if(jogador.assistencias < 0){
        document.querySelector("#assistencias").classList.add("is-error");
        document.querySelector("#assistencias-error").innerText = "Não pode ser menor que 0";
        valid = false
    }

    return valid
}

function limparErros() {
    document.querySelectorAll("is-error").forEach((campo) => campo.classList.remove("is-error"));
    document.querySelectorAll("span.is-error").forEach((span) => span.innerText = "");
}
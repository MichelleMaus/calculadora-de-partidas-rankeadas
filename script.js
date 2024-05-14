function saldoRankeadas(vitoriasHeroi, derrotasHeroi) {
    if (isNaN(vitoriasHeroi) || isNaN(derrotasHeroi)) {
        return "Por favor, insira valores válidos para vitórias e derrotas.";
    } else if(vitoriasHeroi === "" || derrotasHeroi === "")
        return "Por favor, insira os valores de vitórias e derrotas."

    vitoriasHeroi = parseInt(vitoriasHeroi);
    derrotasHeroi = parseInt(derrotasHeroi);

    let saldoPartidas = vitoriasHeroi - derrotasHeroi;
    let nivel;

    if (saldoPartidas < 10 ){
        nivel = "Ferro";
    } else if (saldoPartidas <= 20){
        nivel = "Bronze";
    } else if (saldoPartidas <= 50){
        nivel = "Prata";
    } else if (saldoPartidas <= 80){
        nivel = "Ouro";
    } else if (saldoPartidas <= 90){
        nivel = "Diamante";
    } else if (saldoPartidas <= 100){
        nivel = "Lendário";
    } else {
        nivel = "Imortal"
    }

    return `O Herói de saldo de ${saldoPartidas} está no nível de ${nivel}`;
}

function verificarNivel() {
    console.log("Função verificarNivel() foi chamada.")
    var vitoriasHeroi = document.getElementById("vitorias_Heroi").value;
    var derrotasHeroi = document.getElementById("derrotas_Heroi").value;
    var resultadoElement = document.getElementById("resultado");

    var resultado = saldoRankeadas(vitoriasHeroi, derrotasHeroi);
    resultadoElement.textContent = resultado;
}
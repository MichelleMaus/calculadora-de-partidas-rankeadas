function saldoRankeadas(nomeHeroi, vitoriasHeroi, derrotasHeroi) {
    if (vitoriasHeroi === "" || isNaN(vitoriasHeroi)) {
        return "Por favor, insira um valor válido para vitórias.";
    }

    if (derrotasHeroi === "" || isNaN(derrotasHeroi)) {
        return "Por favor, insira um valor válido para derrotas.";
    }

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
        nivel = "Imortal";
    }

    return `O Herói de saldo de ${saldoPartidas} está no nível de ${nivel}`;
}

// Exemplo de uso:
let nomeHeroi = "Superman";
let vitoriasHeroi = 80;
let derrotasHeroi = 20;

console.log(saldoRankeadas(nomeHeroi, vitoriasHeroi, derrotasHeroi));

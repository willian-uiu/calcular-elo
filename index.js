let ranked = function winRate(wins, loses){
    let calculateWinRate = wins - loses;
    let elo;
    let stringResult = `O Herói tem de saldo de ${calculateWinRate} está no nível de ${elo}`;

    if(calculateWinRate <= 10){
        elo = "Ferro";
    } else if (calculateWinRate < 20) {
        elo = "Bronze";
    } else if (calculateWinRate < 50) {
        elo = "Prata";
    } else if (calculateWinRate < 80) {
        elo = "Ouro";
    } else if (calculateWinRate < 90) {
        elo = "Diamante";
    } else if (calculateWinRate < 100) {
        elo = "Lendário";
    } else {
        elo = "Imortal";
    }
    return stringResult;
}

let wins = 50;
let loses = 10;

console.log(ranked(wins, loses));
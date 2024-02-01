let nomeHeroi = "Batman";
let xpHeroi = 80050;

if (xpHeroi < 1000) {
  xpHeroi = "ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  xpHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  xpHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  xpHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  xpHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  xpHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  xpHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
  xpHeroi = "Radiante";
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${xpHeroi}`);

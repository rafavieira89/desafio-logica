//trocar("Pastilha de freio", "discos de freio");

//function trocar(peca1, peca2) {
//console.log(`Foi trocado a ${peca1} e  os ${peca2}`);
//}

let userName = getFirstName("Rafael Domingos Veira");

console.log(`Seja bem vindo ${userName}`);

function getFirstName(name) {
  let firstName = name.split(" ")[0];
  return firstName;
}

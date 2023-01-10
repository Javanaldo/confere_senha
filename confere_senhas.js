let senha = [
  "N#esta%r",
  "1234567a",
  "Ga#",
  "Malu1",
  "Regi@12",
  "joazin*O",
  "JACARE"
];

let especial = ["!", "@", "#", "$", "%", "&", "*"];
let letrasMin = "abcdefghijklmnopqrstuvxyz";
let letrasMais = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
function validaSenha(teste) {
  let mais = "notOK"; //confere se tem maiúsculas
  for (let i = 0; i < letrasMais.length; i++) {
    if (teste.indexOf(letrasMais[i]) != -1) {
      mais = "OK";
    }
  } // fecha for do teste de maiúsculas
  let num = "notOK";// inicia teste de números
  const regex = /[0-9]/;
  if (regex.test(teste)) {// esse teste eu copiei da internet, não sei direito como funciona
    num = "OK";
  }
  let comp = ""; //inicia verificação de comprimento de senha
  if (teste.length >= 4 && teste.length <= 8) {
    comp = "OK";
  } else {
    comp = "notOK";
  } // fecha else da verificação comprimento de senha
  let esp = "notOK"; // Verifica se tem caracteres especiais
  for (let i = 0; i < especial.length; i++) {
    if (teste.indexOf(especial[i]) != -1) {
      esp = "OK";
    }
    //console.log(especial[i]);
  } // fecha for
  let letra = "notOK"; // Verifica se tem letras
  for (let i = 0; i < letrasMin.length; i++) {
    if (teste.indexOf(letrasMin[i]) != -1) {
      letra = "OK";
    }
    //console.log(especial[i]);
  } // fecha for
  return console.log(
    `${teste} - Maiusculas: ${mais}\n\ ${teste} - Especiais: ${esp}\n\ ${teste} - Números: ${num}\n\ ${teste} - Comprimento: ${comp}\n\ ${teste} - Letras: ${letra}`
  );
} // fecha validaSenha
let pos = getRandomInt(senha.length);
console.log(pos);// sorteia uma senha aleatória para o teste.
validaSenha(senha[pos]);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

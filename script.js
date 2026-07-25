function calcular() {
  let altura = Number(document.getElementById("txtalt").value);
  let peso = Number(document.getElementById("txtp").value);
  let clas = ''
  if (altura === 0 || peso === 0) {
    window.alert("Preencha todos os campos corretamente antes de proseguir.");
  } else {
    let imc = peso / altura ** 2;
    let res = document.getElementById("res");
    if (imc < 18.5) {
       clas = "Abaixo do peso";
    } else if (imc < 24.9) {
       clas = "Peso normal";
    } else if (imc < 29.9) {
       clas = "Sobrepeso";
    } else if (imc < 34.9) {
       clas = "Obesidade grau I";
    } else if (imc < 39.9) {
       clas = "Obesidade grau II";
    } else {
       clas = "Obesidade grau III";
    }
    res.innerHTML = `Seu imc é:${imc.toFixed(1)} <br> Classificação: ${clas}`;
  }
  txtalt.value = " ";
  txtp.value = " ";
  txtalt.focus();
}

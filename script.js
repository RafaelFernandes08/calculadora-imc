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
    res.innerHTML = `<section class="tabela-imc">
    <h2>Tabela de Classificação do IMC</h2>

    <table>
        <thead>
            <tr>
                <th>IMC</th>
                <th>Classificação</th>
            </tr>
        </thead>

        <tbody>
            <tr id="abaixo">
                <td>Abaixo de 18,5</td>
                <td>Abaixo do peso</td>
            </tr>

            <tr id="normal">
                <td>18,5 – 24,9</td>
                <td>Peso normal</td>
            </tr>

            <tr id="sobrepeso">
                <td>25,0 – 29,9</td>
                <td>Sobrepeso</td>
            </tr>

            <tr id="obesidade1">
                <td>30,0 – 34,9</td>
                <td>Obesidade Grau I</td>
            </tr>

            <tr id="obesidade2">
                <td>35,0 – 39,9</td>
                <td>Obesidade Grau II</td>
            </tr>

            <tr id="obesidade3">
                <td>40,0 ou mais</td>
                <td>Obesidade Grau III</td>
            </tr>
        </tbody>
    </table>
</section> 
Seu imc é:${imc.toFixed(1)} <br> Classificação: ${clas}`;
  }
  txtalt.value = " ";
  txtp.value = " ";
  txtalt.focus();
}

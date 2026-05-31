function calcularIMC(){
//entrada de dados
    let peso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    //processamento
    let valorFinal = peso / (valorAltura * valorAltura);

     let mensagem = "";
      if (valorFinal < 18.6) {
        mensagem = "Magreza";
        } 
      else if (valorFinal < 25) {
        mensagem = "Ideal";
        } 
      else if (valorFinal < 30) {
        mensagem = "Sobrepeso";
        } 
      else {
        mensagem = "Obesidade";
        }

    //saída de dados
    document.getElementById("resultado").textContent = "seu IMC é: " + valorFinal.toFixed(2);
    document.getElementById("ideal").textContent = mensagem + "!";
}



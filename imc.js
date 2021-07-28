function calcularIMC() {

    let peso = parseFloat(document.getElementById("pesoInput").value);
    let altura = parseFloat(document.getElementById("alturaInput").value) / 100;

    let resultadoIMC = (peso / (altura * altura)).toFixed(2);
    
    //return document.querySelector(".resultado").innerHTML = `IMC: ${resultadoIMC}`;

    if (resultadoIMC < 18.5) {
        document.querySelector(".resultado").innerHTML = `Classificação: Magreza. IMC:${resultadoIMC}`;
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        document.querySelector(".resultado").innerHTML = `Classificação: Normal. IMC:${resultadoIMC}`;
    } else if (resultadoIMC > 24.9 && resultadoIMC <= 29.9) {
        document.querySelector(".resultado").innerHTML = `Classificação: Sobrepeso. IMC:${resultadoIMC}`;
    } else if (resultadoIMC > 29.9 && resultadoIMC <= 39.9) {
        document.querySelector(".resultado").innerHTML = `Classificação: Obesidade 1° grau. IMC:${resultadoIMC}`;      
    } else if (resultadoIMC > 39.9) {
        document.querySelector(".resultado").innerHTML = `Classificação: Obesidade 2° grau. IMC:${resultadoIMC}`;
    }
};





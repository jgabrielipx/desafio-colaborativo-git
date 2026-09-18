let media = 8.0;

if (media >= 6) {
    document.getElementById("resultado").innerHTML =
        "Média: " + media.toFixed(1) + "<br>APROVADO!";
} else {
    document.getElementById("resultado").innerHTML =
        "Média: " + media.toFixed(1) + "<br>REPROVADO!";
}
"use strict";
var button = document.getElementById('button');
var peso = document.getElementById('peso');
var result = document.getElementById('result');
var qtdDeAguaKg = 50;
function calcularQtdAgua(pesoEmKG) {
    if (typeof pesoEmKG === 'number') {
        return (pesoEmKG * qtdDeAguaKg) / 1000;
    }
    else {
        return (Number(pesoEmKG) * qtdDeAguaKg) / 1000;
    }
}
if (button) {
    button.addEventListener('click', function () {
        if (peso) {
            result.innerHTML = "".concat(calcularQtdAgua(Number(peso.value)), " litros.");
        }
    });
}
//# sourceMappingURL=app.js.map
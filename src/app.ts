let button = document.getElementById('button');
let peso = document.getElementById('peso') as HTMLInputElement;
let result = document.getElementById('result') as HTMLElement;

const qtdDeAguaKg = 50;

function calcularQtdAgua(pesoEmKG: Number) {
    if(typeof pesoEmKG === 'number'){
        return (pesoEmKG * qtdDeAguaKg)/1000;
    } else {
        return (Number(pesoEmKG) * qtdDeAguaKg)/1000;
    }
}

if(button) {
    button.addEventListener('click', () => {
        if(peso) {
            result.innerHTML = `${calcularQtdAgua(Number(peso.value))} litros.`;
        }
    })
}
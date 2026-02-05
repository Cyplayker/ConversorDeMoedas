const button = document.getElementById('converted-button');

const dolar = 5.2; // taxa de câmbio exemplo

function convertedValues() {
    const inputReais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const currencyValueText = document.getElementById('currency-value-text');

    realValueText.innerHTML = inputReais;
    currencyValueText.innerHTML = inputReais / dolar;

    const result = inputReais / dolar;

    console.log(result);
}

button.addEventListener('click', convertedValues);

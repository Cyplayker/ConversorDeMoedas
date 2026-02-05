const button = document.getElementById('converted-button');

const dolar = 5.0; // taxa de câmbio exemplo

function convertedValues() {
    const inputReais = document.getElementById('input-real').value;

    const result = inputReais / dolar;

    console.log(result);
}

button.addEventListener('click', convertedValues);

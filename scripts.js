const button = document.getElementById('converted-button');
const select = document.getElementById('currency-select');


const dolar = 5.2; 

function convertedValues() {
    const inputReais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const currencyValueText = document.getElementById('currency-value-text');

    const result = inputReais / dolar;

    // Formatando BRL
    const realFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReais);

    // Formatando USD
    const dolarFormatado = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(result);

    // Mostrando na tela
    realValueText.innerHTML = realFormatado;
    currencyValueText.innerHTML = dolarFormatado;

    console.log(result);
}

changecurrency = () => { 
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.getElementById('currency-image');
    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro';
        currencyImage.src = './assets/euro.png';
    } else {
        currencyName.innerHTML = 'Dólar americano';
        currencyImage.src = './assets/eua.png';
    }
}

button.addEventListener('click', convertedValues);
select.addEventListener("change", changecurrency);

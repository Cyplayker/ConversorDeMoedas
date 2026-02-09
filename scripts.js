const button = document.getElementById('converted-button');
const select = document.getElementById('currency-select');

const dolar = 5.2;
const euro = 7.2;

function convertedValues() {
    const inputReais = Number(document.getElementById('input-real').value);
    const realValueText = document.getElementById('real-value-text');
    const currencyValueText = document.getElementById('currency-value-text');

    
    const realFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReais);

    realValueText.innerHTML = realFormatado;

    let valorConvertido;

    
    if (select.value === 'euro') {
        valorConvertido = inputReais / euro;

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorConvertido);

    } else {
        valorConvertido = inputReais / dolar;

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorConvertido);
    }
}


function changecurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.getElementById('currency-image');

    if (select.value === 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImage.src = './assets/euro.png';
    } else {
        currencyName.innerHTML = 'Dólar americano';
        currencyImage.src = './assets/eua.png';
    }
        convertedValues();
}

button.addEventListener('click', convertedValues);
select.addEventListener('change', changecurrency);

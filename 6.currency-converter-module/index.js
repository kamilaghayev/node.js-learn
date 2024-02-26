const CC = require('currency-converter-lt');



function CurrencyConverter(elements) {
    return new CC({ from : elements.from, to: elements.to, amount: elements.amount})
}

CurrencyConverter({from: "USD", to: "AZN", amount: 150}).convert()
    .then(response => {
        console.log(response);
    })
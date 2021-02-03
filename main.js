let dropDowns = document.querySelectorAll("select");
let convertButton = document.querySelector("button");
let url = "https://api.exchangeratesapi.io/latest?base="


for (let dropDown of dropDowns) {
    dropDown.addEventListener("change", changeCurrencyLabels);
}

convertButton.addEventListener("click", buttonEvent);



populateDropdowns()
changeCurrencyLabels()










function buttonEvent() {
    let baseCurrency = document.querySelector("#base-currency-dropdown").value;
    let targetCurrency= document.querySelector("#target-currency-dropdown").value;
    let baseAmount = parseInt(document.querySelector("input").value);
    let resultLabel = document.querySelector(".result-currency");

    let result;

    fetch(url+baseCurrency)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const conversionRate = data.rates[targetCurrency];
            result = calculateConversion(baseAmount, conversionRate);
            resultLabel.textContent = formatResultCurrency(result);
        })

    
}


function calculateConversion(amount, conversionRate) {
    return amount * conversionRate
}

function formatResultCurrency(result) {
    return `$${result.toFixed(2)}`
}



function populateDropdowns() {
    let baseDropDown = document.querySelector("#base-currency-dropdown");
    let targetDropDown = document.querySelector("#target-currency-dropdown");
    for (let i = 0; i < currencies.length; i++) {
        let newOption1 = document.createElement("option");
        let newOption2 = document.createElement("option");
        newOption1.textContent = newOption2.textContent = currencies[i];

        baseDropDown.appendChild(newOption1);
        targetDropDown.appendChild(newOption2);
        baseDropDown.selectedIndex = currencies.indexOf("USD");
    }
}

function changeCurrencyLabels() {
    let baseLabel = document.querySelector("#currency-label");
    let baseCurrency = document.querySelector("#base-currency-dropdown").value
    let targetLabel = document.querySelector(".target-currency");
    let targetCurrency = document.querySelector("#target-currency-dropdown").value

    baseLabel.textContent = baseCurrency
    targetLabel.textContent = targetCurrency;
}

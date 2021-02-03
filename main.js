let dropDowns = document.querySelectorAll("select");



for (let dropDown of dropDowns) {
    dropDown.addEventListener("change", changeCurrencyLabels);
}




populateDropdowns()
changeCurrencyLabels()














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

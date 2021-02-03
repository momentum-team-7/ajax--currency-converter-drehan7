populateDropdowns()
function populateDropdowns() {
    let baseDropDown = document.querySelector("#base-currency-dropdown");
    let targetDropDown = document.querySelector("#target-currency-dropdown");
    for (let i = 0; i < currencies.length; i++) {
        let newOption1 = document.createElement("option");
        let newOption2 = document.createElement("option");
        newOption1.textContent = newOption2.textContent = currencies[i];

        baseDropDown.appendChild(newOption1);
        targetDropDown.appendChild(newOption2);
    }
}

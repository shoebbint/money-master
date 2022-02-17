
// input function
function getInput(input) {
    const givenInput = document.getElementById(input + '-amount');
    const InputAmount = parseFloat(givenInput.value);
    return InputAmount;
}
// error function
function error(item) {
    const Error = document.getElementById(item + '-error');
    Error.style.display = 'block';
}
// value store function
function valueUpdate(field, storage) {
    let balanceAmount = document.getElementById(field);
    balanceAmount.innerText = storage;
}

// for calculate-button
const calculateButton = document.getElementById('calculate-btn').addEventListener("click", function () {

    let incomeAmount = getInput("income");
    let foodAmount = getInput("food");
    let rentAmount = getInput("rent");
    let clothesAmount = getInput("clothes");
    // error handling
    if (isNaN(incomeAmount) || isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)) {

        error("invalid");
    }
    else if (incomeAmount >= 0 && foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0) {
        const totalExpense = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);
        valueUpdate("total-expenses", totalExpense);

        const balance = parseFloat(incomeAmount) - totalExpense;
        valueUpdate("balance", balance);
        // bonus error
        if (totalExpense > incomeAmount) {
            error("expense");
        }
    }
    else {
        error("neg");

    }
    // for save button
    const savings = document.getElementById('saving-btn').addEventListener('click', function () {
        const savingInput = document.getElementById("saving-input");
        const savingPercentage = parseFloat(savingInput.value) / 100;
        const savingAmount = incomeAmount * savingPercentage;
        valueUpdate("saving-amount", savingAmount);

        const remainBalance = balance.innerText - savingAmount;
        valueUpdate("remaining-balance", remainBalance);
        if (savingAmount > balance.innerText) {
            error("balance");
        }
    })
})


// input function
function getInput(input) {
    const givenInput = document.getElementById(input + '-amount');
    const InputAmount = parseFloat(givenInput.value);
    return InputAmount;
    givenInput.value = '';
}
// for calculate-button
const calculateButton = document.getElementById('calculate-btn').addEventListener("click", function () {

    let incomeAmount = getInput("income");
    let foodAmount = getInput("food");
    let rentAmount = getInput("rent");
    let clothesAmount = getInput("clothes");
    // error handling
    if (isNaN(incomeAmount) || isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)) {
        const firstError = document.getElementById('invalid-error');
        firstError.style.display = 'block';
        document.getElementById('neg-error').style.display = 'none';
    }
    else if (incomeAmount >= 0 && foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0) {
        const totalExpense = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);
        let totalExpenseCost = document.getElementById('total-expenses')
        totalExpenseCost.innerText = totalExpense;

        let balanceAmount = document.getElementById('balance');
        const balance = parseFloat(incomeAmount) - totalExpense;
        balanceAmount.innerText = balance;
        // bonus error
        if (totalExpense > incomeAmount) {
            const thirdError = document.getElementById('expense-error');
            thirdError.style.display = 'block';
            balanceAmount.innerText = '';
            document.getElementById('invalid-error').style.display = 'none';
        }
    }
    else {
        const firstError = document.getElementById('neg-error');
        firstError.style.display = 'block';

        document.getElementById('invalid-error').style.display = 'none';

    }


    // for save button
    const savings = document.getElementById('saving-btn').addEventListener('click', function () {
        const savingInput = document.getElementById("saving-input");
        const savingPercentage = parseFloat(savingInput.value) / 100;
        const savingAmount = incomeAmount * savingPercentage;

        const totalSaving = document.getElementById('saving-amount');
        totalSaving.innerText = savingAmount;

        const remainBalance = balance.innerText - savingAmount;
        const remainingAmount = document.getElementById('remaining-balance');
        remainingAmount.innerText = parseFloat(remainBalance);
        if (savingAmount > balance.innerText) {
            const fourthError = document.getElementById('balance-error');
            fourthError.style.display = 'block';
        }



    })
})

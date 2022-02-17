
// input
// for calculate-button
const calculateButton = document.getElementById('calculate-btn').addEventListener("click", function () {

    const incomeInput = document.getElementById('income-amount');
    const incomeAmount = parseFloat(incomeInput.value);
    incomeInput.value = '';

    const foodCostInput = document.getElementById('food-cost');
    const foodAmount = parseFloat(foodCostInput.value);
    foodCostInput.value = '';

    const rentCostInput = document.getElementById('rent-cost');
    const rentAmount = parseFloat(rentCostInput.value);
    rentCostInput.value = '';

    const clothesCostInput = document.getElementById('clothes-cost');
    const clothesAmount = parseFloat(clothesCostInput.value);
    clothesCostInput.value = '';

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
        console.log(incomeAmount, foodAmount, rentAmount, clothesAmount, totalExpense)
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
        console.log(savingAmount)

        const remainBalance = balance.innerText - savingAmount;
        console.log(remainBalance);
        const remainingAmount = document.getElementById('remaining-balance');
        remainingAmount.innerText = parseFloat(remainBalance);

    })
})

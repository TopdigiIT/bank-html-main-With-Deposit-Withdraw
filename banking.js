// ---------------------------Deposit and After Deposit--------------------------

function handleDeposit() {
    // Deposit Input to convert number
    const depositInputField = document.getElementById('deposit-input');
    const depositInputText = depositInputField.value;
    const newDepositAmount = parseFloat(depositInputText);

    // Check if the input is a valid number
    if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
        alert("Please enter a valid deposit amount.");
        return; // Exit the function if input is not valid
    }

    // Previous Deposit to convert number
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    // Deposit Total = New Deposit + Previous Deposit
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Clear input value after new deposit
    depositInputField.value = '';

    // Previous Balance to convert number
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    // Balance Total = New Deposit + Previous Balance
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
}

// Add event listener to Deposit button
document.getElementById('deposit-button').addEventListener('click', handleDeposit);

// Add event listener for Enter key press on Deposit input
document.getElementById('deposit-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleDeposit();
    }
});

// ---------------------------Withdraw and After Withdraw--------------------------

function handleWithdraw() {
    // Withdraw Input to convert number
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);

    // Check if the input is a valid number
    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert("Please enter a valid withdraw amount.");
        return; // Exit the function if input is not valid
    }

    // Previous Withdraw to convert number
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    // Withdraw Total = New Withdraw + Previous Withdraw
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Clear input value after new withdraw
    withdrawInputField.value = '';

    // Previous Balance to convert number
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    // Ensure balance is not negative
    if (newWithdrawAmount > previousBalanceAmount) {
        alert("Insufficient balance for this withdrawal.");
        return; // Exit the function if the balance is insufficient
    }

    // Balance Total = Previous Balance - New Withdraw Balance
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
}

// Add event listener to Withdraw button
document.getElementById('withdraw-button').addEventListener('click', handleWithdraw);

// Add event listener for Enter key press on Withdraw input
document.getElementById('withdraw-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleWithdraw();
    }
});

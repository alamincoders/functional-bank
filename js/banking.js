function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;

    // clear
    inputField.value = '';
    return inputAmount;

}


function updateTotalField(totalFieldID, amount) {
    const totalElement = document.getElementById(totalFieldID);
    const totalText = totalElement.innerText;
    totalElement.innerText = parseFloat(totalText) + parseFloat(amount);
}



function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(amount);
    } else {
        balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(amount);
    }
}


document.getElementById('deposit-button').addEventListener('click', function() {
    //  The function is called in the bottom line
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);




    // get current deposit 
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount); */


    // update balance
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount); */


});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false);



    // update withdraw total
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawTotalText = withdrawTotal.innerText;
     withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawAmount); */


    // update balance after withdraw

    /*  const totalBalance = document.getElementById('balance-total');
     const totalBalanceText = totalBalance.innerText;
     totalBalance.innerText = parseFloat(totalBalanceText) - parseFloat(withdrawAmount); */
})
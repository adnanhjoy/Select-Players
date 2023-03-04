
// const players = document.querySelectorAll('.player-button');
// for (let player of players) {
//     console.log(player)
// }
function getInputValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldValue = parseInt(inputField.value);
    inputField.value = '';

    if (isNaN(inputFieldValue)) {
        alert('Please Type a Valid Number')
    }
    return inputFieldValue;
}

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerValue = getInputValue('per-player-field');
    const totalPlayerValue = perPlayerValue * 5;
    const playerExpense = document.getElementById('player-expenses');
    playerExpense.innerText = totalPlayerValue;
});

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpense = document.getElementById('player-expenses');
    const playerExpenseValue = parseInt(playerExpense.innerText);
    const managerField = getInputValue('manager-field');
    const coachField = getInputValue('coach-field');

    const totalCost = playerExpenseValue + managerField + coachField;

    const totalFieldCost = document.getElementById('total-cost');

    totalFieldCost.innerText = totalCost;
    console.log(totalFieldCost)
})
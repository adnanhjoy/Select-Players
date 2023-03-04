
// const players = document.querySelectorAll('.player-button');
// for (let player of players) {
//     console.log(player)
// }

function getFivePlayerList(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    const playerList = document.getElementById('player-list');
    const playerElementAdd = document.createElement('li');
    playerElementAdd.style.padding = '10px'
    playerElementAdd.innerText = playerName;
    playerList.appendChild(playerElementAdd);

}
document.getElementById('player-btn1').addEventListener('click', function () {
    getFivePlayerList('player1');
    const playerButton = document.getElementById('player-btn1');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn2').addEventListener('click', function () {
    getFivePlayerList('player2');
    const playerButton = document.getElementById('player-btn2');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn3').addEventListener('click', function () {
    getFivePlayerList('player3');
    const playerButton = document.getElementById('player-btn3');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn4').addEventListener('click', function () {
    getFivePlayerList('player4');
    const playerButton = document.getElementById('player-btn4');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn5').addEventListener('click', function () {
    getFivePlayerList('player5');
    const playerButton = document.getElementById('player-btn5');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn6').addEventListener('click', function () {
    getFivePlayerList('player6');
    const playerButton = document.getElementById('player-btn6');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn7').addEventListener('click', function () {
    getFivePlayerList('player7');
    const playerButton = document.getElementById('player-btn7');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn8').addEventListener('click', function () {
    getFivePlayerList('player8');
    const playerButton = document.getElementById('player-btn8');
    playerButton.setAttribute("disabled", "")
});
document.getElementById('player-btn9').addEventListener('click', function () {
    getFivePlayerList('player9');
    const playerButton = document.getElementById('player-btn9');
    playerButton.setAttribute("disabled", "")
});
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
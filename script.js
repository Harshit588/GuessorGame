function togglePasswordVisibility() {
    const passwordField = document.getElementById('guesserNumber');
    const toggleIcon = document.querySelector('.toggle-password i');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function compareNumbers() {
    const guesserNumber = parseInt(document.getElementById('guesserNumber').value);
    const playerNumber1 = parseInt(document.getElementById('playerNumber1').value);
    const playerNumber2 = parseInt(document.getElementById('playerNumber2').value);
    const playerNumber3 = parseInt(document.getElementById('playerNumber3').value);

    let resultMessage = '';

    if (isNaN(guesserNumber) || isNaN(playerNumber1) || isNaN(playerNumber2) || isNaN(playerNumber3)) {
        resultMessage = 'Please enter valid numbers for all fields.';
    } else {
        const player1Wins = playerNumber1 === guesserNumber;
        const player2Wins = playerNumber2 === guesserNumber;
        const player3Wins = playerNumber3 === guesserNumber;

        if (player1Wins && player2Wins && player3Wins) {
            resultMessage = 'All players won the game!';
        } else if (player1Wins && player2Wins) {
            resultMessage = 'Player 1 and Player 2 won the game!';
        } else if (player1Wins && player3Wins) {
            resultMessage = 'Player 1 and Player 3 won the game!';
        } else if (player2Wins && player3Wins) {
            resultMessage = 'Player 2 and Player 3 won the game!';
        } else if (player1Wins) {
            resultMessage = 'Player 1 won the game!';
        } else if (player2Wins) {
            resultMessage = 'Player 2 won the game!';
        } else if (player3Wins) {
            resultMessage = 'Player 3 won the game!';
        } else {
            resultMessage = 'No one won the game...';
        }
    }

    document.getElementById('result').textContent = resultMessage;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const num = document.getElementById("num");
    const result = document.getElementById("result");
    const score = document.getElementById("score");
    let random = Math.floor(Math.random() * 11);
    let tot = 10;

    window.checkGuess = function() {
        const guess = parseInt(num.value);
        if (guess === random) {
            result.textContent = "Right!";
            alert("You won the game...");
            resetGame();
        } else {
            tot -= 1;
            result.textContent = "Wrong!";
            score.textContent = "Score: " + tot;
            if (tot === 0) {
                alert("Game over! The correct number was " + random);
                resetGame();
            }
        }
    };

    function resetGame() {
        random = Math.floor(Math.random() * 11);
        tot = 10;
        score.textContent = "Score: " + tot;
        result.textContent = "Result";
        num.value = '';
    }
});

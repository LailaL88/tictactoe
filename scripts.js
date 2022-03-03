function onPageLoaded() {
    const cells = document.querySelectorAll(".wrapper div");
    const winner = document.getElementById("winner");
    const swithTurn = document.getElementById("gameOverText");
    const restartButton = document.querySelector(".button-container button");
    const gameField = document.getElementById("gameField");
    const gameBody = document.querySelector("body");
    const cell1 = document.getElementById("cell1");
    const cell2 = document.getElementById("cell2");
    const cell3 = document.getElementById("cell3");
    const cell4 = document.getElementById("cell4");
    const cell5 = document.getElementById("cell5");
    const cell6 = document.getElementById("cell6");
    const cell7 = document.getElementById("cell7");
    const cell8 = document.getElementById("cell8");
    const cell9 = document.getElementById("cell9");
    let gameOver = false;
    let cellArr = [];


    function stopClick(event) {
        event.stopPropagation();
    }


    cells.forEach((cell) => {
        cell.addEventListener("click", function addInnerText() {
            if (cell.innerText == "X" || cell.innerText == "O") {
                return;
            }
            cell.style.backgroundColor = "lightgreen";
            if (getTurn()) {
                cell.innerText = "X";
                swithTurn.innerText = "It's O turn";
                cellArr.push("X");

            } else {
                cell.innerText = "O";
                swithTurn.innerText = "It's X turn";
                cellArr.push("O");
            }

            getWinner(cell1, cell2, cell3);
            getWinner(cell4, cell5, cell6);
            getWinner(cell7, cell8, cell9);
            getWinner(cell1, cell4, cell7);
            getWinner(cell2, cell5, cell8);
            getWinner(cell3, cell6, cell9);
            getWinner(cell1, cell5, cell9);
            getWinner(cell3, cell5, cell7);

            if (gameOver) {
                gameField.addEventListener("click", stopClick, true);
                gameOverText.innerText = "Game Over!";
                gameBody.style.backgroundColor = "yellowgreen";
            } else if (cellArr.length > 8) {
                gameField.addEventListener("click", stopClick, true);
                gameOverText.innerText = "Game Over!";
                winner.innerText = "It's a tie!";
                gameBody.style.backgroundColor = "yellowgreen";
            }
        })
    })

    restartButton.onclick = function() {
        gameField.removeEventListener("click", stopClick, true);
        cellArr.length = 0;
        turn = 1;
        gameOver = false;
        swithTurn.innerText = "It's X turn";
        winner.innerText = "";
        gameBody.style.backgroundColor = "white";
        cells.forEach((cell) => {
            cell.innerText = "";
            cell.style.backgroundColor = "azure";
        })
    }

    let turn = 1;

    function getTurn() {
        if (turn % 2 > 0) {
            turn++;
            return true;
        } else {
            turn++;
            return false;
        }
    }

    function getWinner(cell1, cell2, cell3) {
        if (cell1.innerText == "X" && cell2.innerText == "X" && cell3.innerText == "X") {
            winner.innerText = " X won!";
            gameOver = true;
        }
        if (cell1.innerText == "O" && cell2.innerText == "O" && cell3.innerText == "O") {
            winner.innerText = " O won!";
            gameOver = true;
        }
    }


}

document.addEventListener("DOMContentLoaded", onPageLoaded);
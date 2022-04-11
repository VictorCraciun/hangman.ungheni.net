let wordInput;
let checkWord = "";
let mistakes = 7;

function startGame() {
    wordInput = document.getElementById('wordInput').value.toLowerCase();
    for (let i = 0; i < wordInput.length; ++i) {
        checkWord = checkWord + "*";
    }
    for (let i = 97; i <= 122; ++i) {
        var letterButton = document.createElement("button");
        var letter = String.fromCharCode(i);
        letterButton.setAttribute("button", i);
        letterButton.innerHTML='<button class="btn btn-warning" onclick="pressLetter(\'' + letter + '\');">' + letter + '</button>';;
        letterButton.value = letter;
        document.getElementById("displayButtonsLetter").appendChild(letterButton);
    }
    document.getElementById("playButton").style.visibility = "hidden";
    document.getElementById("wordInput").value = checkWord;
}

function pressLetter(x) {
    var posChar = wordInput.indexOf(x);
    if (posChar >= 0) {
        checkWord = checkWord.substring(0, posChar) + x + checkWord.substring(posChar + 1, checkWord.length);
        wordInput = wordInput.substring(0, posChar) + "*" + wordInput.substring(posChar + 1, wordInput.length);
        document.getElementById("wordInput").value = checkWord;
    } else {
        mistakes--;
        let chooseImage = "images/hangman0" + (7 - mistakes).toString() + ".jpg";
        document.getElementById("image").src = chooseImage;
        document.getElementById("life").innerText = mistakes;
        document.getElementById("life").style.color ="green";
    }
    if (checkWord.indexOf('*') < 0) {
        document.getElementById("message").innerText = "Ai Castigat";
        document.getElementById("message").style.color = "green";
    } else {
        if (mistakes == 0) {
            document.getElementById("message").innerText = "Ai pierdut";
            document.getElementById("message").style.color = "red";
        }
    }
}
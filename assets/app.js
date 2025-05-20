 const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  let attempts = 0; // Track the number of attempts

  function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++; // Increase attempt count
    const messageElement = document.getElementById("message");

    if (userGuess === randomNumber) {
      messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
      messageElement.classList.remove("wrong");
      messageElement.classList.add("correct");
    } else if (userGuess < randomNumber) {
      messageElement.textContent = "Too low! Try again.";
      messageElement.classList.remove("correct");
      messageElement.classList.add("wrong");
    } else {
      messageElement.textContent = "Too high! Try again.";
      messageElement.classList.remove("correct");
      messageElement.classList.add("wrong");
    }
  }
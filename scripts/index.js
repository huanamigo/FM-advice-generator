const mainQuote = document.querySelector("#mainQuote");
const quoteID = document.querySelector("#quoteID");
const randomButton = document.querySelector(".randomizeBtn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      mainQuote.innerHTML = '"' + data.slip.advice + '"';
      quoteID.innerHTML = "ADVICE #" + data.slip.id;
    });
}

getAdvice();
randomButton.addEventListener("click", getAdvice);

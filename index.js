//Juego de Prieda, Papel O Tijera

// Funcion para que la computadora, retorne una respuesta aletoria.

let humanScore = 0;
let computerScore = 0;

const getComputerChoise = () => {
  let numberRandom = Math.random();
  console.log(numberRandom);
  if (numberRandom <= 0.33) {
    return "Piedra";
  } else if (numberRandom <= 0.66) {
    return "Tijera";
  } else {
    return "Papel";
  }
};

//Funcion para que el humano retorne su jugada.
// const getHumanChoice = () => {
//   let application = prompt("Ingrese su jugada: ");
//   //Logica para que si por ejemplo el humano pone TIJERA, se retorne Tijera.
//   let selection =
//     application.charAt(0).toUpperCase() + application.slice(1).toLowerCase();
//   console.log("Jugada del Humano: " + selection);
//   return selection;
// };

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
      console.log("Jugada Computadora: " + computerChoice);
      resultsDiv.textContent = "Igualdad, la ronda tiene que repetirse";
      return "Empate";
  } else if (
      (humanChoice === "Piedra" && computerChoice === "Tijera") ||
      (humanChoice === "Tijera" && computerChoice === "Papel") ||
      (humanChoice === "Papel" && computerChoice === "Piedra")
  ) {
      humanScore += 1;
      console.log("Score Humano: " + humanScore);
      console.log("Score Computadora: " + computerScore);
      resultsDiv.textContent = "Ganaste , " + humanChoice + " vence a " + computerChoice;
      if (humanScore >= 5) {
          finalResult();
          // Deshabilitar los botones para evitar más selecciones
          rockButton.disabled = true;
          paperButton.disabled = true;
          scissorsButton.disabled = true;
      }
      return "Ganaste"; 
  } else {
      computerScore += 1;
      console.log("Score Computadora: " + computerScore);
      console.log("Score Humano: " + humanScore);
      resultsDiv.textContent = "Perdiste , " + computerChoice + " vence a " + humanChoice;
      if (computerScore >= 5) {
          finalResult();
          // Deshabilitar los botones para evitar más selecciones
          rockButton.disabled = true;
          paperButton.disabled = true;
          scissorsButton.disabled = true;
      }
      return "Perdiste"; 
  }
};

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click", () => playRound("Piedra", getComputerChoise()));
paperButton.addEventListener("click", () => playRound("Papel", getComputerChoise()));
scissorsButton.addEventListener("click", () =>playRound("Tijera", getComputerChoise()));

const resultsDiv = document.getElementById('results');



const finalResult = () => {
 if (humanScore > computerScore){
    resultsDiv.textContent = "Ganaste el juego, tu score: " + humanScore + " score de la pc: " + computerScore;
  }else if(humanScore < computerScore){
    resultsDiv.textContent = "Perdiste el juego, tu score: " + humanScore + " score de la pc: " + computerScore;
  }else{
    resultsDiv.textContent = "El juego tiene que repetirse, tu score : " + humanScore + " score de la pc: " + computerScore;
  }
}
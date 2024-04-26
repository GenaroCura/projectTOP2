//Juego de Prieda, Papel O Tijera

// Funcion para que la computadora, retorne una respuesta aletoria.

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
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
const getHumanChoice = () => {
  let application = prompt("Ingrese su jugada: ");
  //Logica para que si por ejemplo el humano pone TIJERA, se retorne Tijera.
  let selection =
    application.charAt(0).toUpperCase() + application.slice(1).toLowerCase();
  console.log("Jugada del Humano: " + selection);
  return selection;
};

const playRound = (humanChoise, computerChoise) => {
    if (humanChoise === computerChoise) {
      console.log("Jugada Computadora: " + computerChoise);
      console.log("Igualdad, la ronda tiene que repetirse");
      return "Empate";
    } else if (
      (humanChoise === "Piedra" && computerChoise === "Tijera") ||
      (humanChoise === "Tijera" && computerChoise === "Papel") ||
      (humanChoise === "Papel" && computerChoise === "Piedra")
    ) {
      humanScore += 1;
      console.log("Score Humano: " + humanScore);
      console.log("Score Computadora: " + computerScore);
      console.log(
        "Ganaste , " + humanChoise + " vence a " + computerChoise
      );
      return "Ganaste"; 
    } else {
      computerScore += 1;
      console.log("Score Computadora: " + computerScore);
      console.log("Score Humano: " + humanScore);
      console.log(
        "Perdiste , " + computerChoise + " vence a " + humanChoise
      );
      return "Perdiste"; 
    }
  };


const playGame = () => {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    const result = playRound(humanSelection,computerSelection);
    console.log(result)
    console.log("Resultado de la ronda " + (i+1) + ": " + result)
  }

  //Declaro el ganador final del juego luego de las 5 rondas:
  if (humanScore > computerScore){
    console.log("!Has ganado el juego")
  }else if (humanScore < computerScore){
    console.log("!Has perdido el juego")
  }else{
    console.log("El juego a terminado en empate")
  }
};


playGame();

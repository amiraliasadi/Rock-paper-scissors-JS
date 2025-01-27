const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase(); //toUppercase ta age user horof koochick vared kard ham ok she
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice ! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
const getWinner = (
  cChoice,
  pChoice = DEFAULT_USER_CHOICE
) /*arg=default value(default value faghat baraye undefined kar mikone null o 0 nmitone tashkhis bede)*/ =>
  //ternary:
  /*return*/ cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('game is starting!');
  const playerSelection = getPlayerChoice(); //might be undefined
  console.log(playerSelection);
  const playerChoice = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(ComputerChoice, playerChoice);
  } else {
    winner = getWinner(ComputerChoice); //only passing one arg to a two args function tihs is wrong but js dosen't give error
  }

  console.log(winner);
  let message = `you picked ${
    playerChoice || DEFAULT_USER_CHOICE /*khili mohem */
  }, computer picked ${ComputerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message += 'had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += `WON!`;
  } else {
    message += 'lost';
  }
  alert(message);
  gameIsRunning = false;
});
//arrow fumction:shorter//only one expression in arrow function:omit return and braclets//if we have only one arg: arg =>{}
//dar sayer zaban haye barname nevisi defaut value darha dar args bayad akhar bian vali to js farghi nmikone
//order vali taghir mikone age 1 doone bedi mire to avali
//bishtar oghat default args bian akhar ke moshkel nakhorim
//age default arg bad arg i biad mitonim arg aval to declaration default value arg 2om estefade konim mesal(cChoice , pChoice =cChoice ==='ROCK' ?PAPER :DEFAULT_USER_CHOICE)

//(bad solution)const sumUp = (a, b, c, d) => {};
// const sumUp = (numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//function in function = object inside object//only can be used in the parent funcction not global
//most of the time we use only global funcs
//some usecases funcs in funcs
const sumUp = (...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
//an alternative to rest operator that is old so we don't use this this makes a arraylike(not array) of args taht can be used only in functions that aare declared with fumnction keyword(it is not available in arrow funcs):
const subtractUp = function () {
  let sum = 0;
  for (const num of arguments) {
    sum -= sum;
  }
  return sum;
};
sumUp(1, 5, 10, -3, 6, 10);
sumUp(1, 5, 10, -3, 6, 10, 25, 88);
//builds array inside of function
//we never reach any args after  rest paramater and we only can have one but we can have args before it

// game scores
let userScore = 0;
let computerScore = 0;

// update for the game rounds
let round = 0;
const totalRounds = 5;

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('user-choice').textContent = `🧍 You chose: ${getEmoji(userChoice)}`;
  document.getElementById('computer-choice').textContent = `🤖 Computer chose: ${getEmoji(computerChoice)}`;
   console.log(computerChoice)
  let resultMessage = '';
  let resultType = '';

  if (userChoice === computerChoice) {
    resultMessage = "🤝 It's a Draw!";
    resultType = 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultMessage = "🎉 You Win!";
    resultType = 'win';
    // user score count using increment operator
    userScore++; 
  } else {
    resultMessage = "😢 You Lose!";
    resultType = 'lose';
    //score count
    computerScore++; 
  }
  console.log(resultType)

  // Update result message and color
  const resultElement = document.getElementById('result');
  resultElement.textContent = resultMessage;

  // Reset classes
  resultElement.classList.remove('result-win', 'result-lose', 'result-draw');

  // Trigger reflow to reapply animation
  void resultElement.offsetWidth;

  // Apply class
  resultElement.classList.add`(result-${resultType})`;

  // Update scoreboard
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;

  // Update round count
  round++;
  document.getElementById('round-info').textContent = `Round: ${round} / ${totalRounds};`
if (round >= totalRounds) {
  let finalMessage = '';
  if (userScore > computerScore) {
    finalMessage = '🏆 You won the match!';
  } else if (computerScore > userScore) {
    finalMessage = '💀 You lost the match!';
  } else {
    finalMessage = "🤝 It's a tie!";
  }

  resultElement.textContent = finalMessage;

  // Disable buttons during final message
  document.querySelectorAll('.choices button').forEach(btn => btn.disabled = true);

  // Restart game smoothly after 2 seconds
  setTimeout(() => {
    resetGame();
  }, 2000);
}
}

function getEmoji(choice) {
  switch (choice) {
    case 'rock': return '✊';
    case 'paper': return '📄';
    case 'scissors': return '✂';
    default: return '';
  }
}
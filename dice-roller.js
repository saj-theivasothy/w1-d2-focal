const rollDice = function(dices) {
  let number = 0;
  const dice = Number(dices);
  let i = 0;
  const numbersRolled = [];
  while (i < dice) {
    number = Math.round(Math.random() * 10);
    if ((number >= 1) && (number <= 6)) {
      numbersRolled.push(number)
    } else {
      continue;
    }
    i++;
  }
  number = numbersRolled.join();
  return `Rolled ${dice}: ${number}`;
}

console.log(rollDice(process.argv.slice(2)[0]));
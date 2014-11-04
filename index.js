"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.

function minimum_of_two(first_number,second_number) {
  var minimum; 
  if (first_number < second_number) {
    minimum = first_number;
  } else {
    minimum = second_number;
  }
  return minimum;
}

function coin_flip() {
  if (Math.random() < 0.5) {
    return 'heads';
  } else {
    return 'tails';
  }
}

function rolling_a_die() {
  if (Math.random() <= 1/6) {
    return 1;
  }
  if (1/6 < Math.random() <= 1/3) {
    return 2;
  }
  if (2/3 < Math.random() <= 1/2) {
    return 3;
  }
  if (1/2 < Math.random() <= 2/3) {
    return 4;
  }
  if (2/3 < Math.random() <= 5/6) {
    return 5;
  }
  if (5/6 < Math.random() <= 1) {
    return 6;
  }
}

function five_dice_rolls() {
  var list;
  list = [];
  for (var current = 0; current < 5; current = current + 1) {
    list[current] = rolling_a_die();
  }
  return list;
}

function Yahtzee(five_dice_rolls) {
  var score;
  score = 0;
  if (five_dice_rolls[0] === five_dice_rolls[1]) {
    if (five_dice_rolls[2] === five_dice_rolls[3]) {
      if (five_dice_rolls[4] === five_dice_rolls[0]) {
        if (five_dice_rolls[1] === five_dice_rolls[2]) {
          if (five_dice_rolls[3] === five_dice_rolls[4]) {
            score = 50;
          }
        }
      }
    }
  } 
  return score;
}

function sum(numbers) {
  var total;
  total = 0;
  for (var current = 0; current < numbers.length; current = current + 1) {
    total = total + numbers[current];
  }
  return total;
}

function four_of_a_kind(five_dice_rolls) {
  var score;
  score = 0;
  if (five_dice_rolls[0] === five_dice_rolls[1]) {
    if (five_dice_rolls[1] === five_dice_rolls[2]) {
      if (five_dice_rolls[2] === five_dice_rolls[3]) {
        score = sum(five_dice_rolls);
      }
    }
  }
  if (five_dice_rolls[1] === five_dice_rolls[2]) {
    if (five_dice_rolls[2] === five_dice_rolls[3]) {
      if (five_dice_rolls[3] === five_dice_rolls[4]) {
        score = sum(five_dice_rolls);
      }
    }
  }
  if (five_dice_rolls[0] === five_dice_rolls[2]) {
    if (five_dice_rolls[2] === five_dice_rolls[3]) {
      if (five_dice_rolls[3] === five_dice_rolls[4]) {
        score = sum(five_dice_rolls);
      }
    }
  }
  if (five_dice_rolls[0] === five_dice_rolls[1]) {
    if (five_dice_rolls[1] === five_dice_rolls[2]) {
      if (five_dice_rolls[2] === five_dice_rolls[4]) {
        score = sum(five_dice_rolls);
      }
    }
  }
  if (five_dice_rolls[0] === five_dice_rolls[1]) {
    if (five_dice_rolls[1] === five_dice_rolls[3]) {
      if (five_dice_rolls[3] === five_dice_rolls[4]) {
        score = sum(five_dice_rolls);
      }
    }
  }
  return score;
}

function large_straight(five_dice_rolls) {
  var score;
  score = 0;
  five_dice_rolls = five_dice_rolls.sort();
  if (five_dice_rolls[0] === five_dice_rolls[1] - 1) {
    if (five_dice_rolls[1] === five_dice_rolls[2] - 1) {
      if (five_dice_rolls[2] === five_dice_rolls[3] - 1) {
        if (five_dice_rolls[3] === five_dice_rolls[4] - 1) {
        score = 40;
        }
      }
    }
  }
  return score;
}

function full_house(five_dice_rolls) {
  var score;
  score = 0;
  five_dice_rolls = five_dice_rolls.sort();
  if (five_dice_rolls[0] === five_dice_rolls[1]) {
    if (five_dice_rolls[1] === five_dice_rolls[2]) {
      if (five_dice_rolls[3] === five_dice_rolls[4]) {
        score = 25;
      }
    }
  }
  if (five_dice_rolls[0] === five_dice_rolls[1]) {
    if (five_dice_rolls[2] === five_dice_rolls[3]) {
      if (five_dice_rolls[3] === five_dice_rolls[4]) {
        score = 25;
      }
    }
  }
  return score;
}

function Yahtzee_scores(functions, five_dice_rolls) {
  var scores;
  scores = [];
  for (var roll = 0; scores.length < functions.length; roll = roll +1) {
    scores[roll] = functions[roll](five_dice_rolls);
  }
  return scores;
}

function maximum(numbers) {
  var max;
  max = -Infinity;
  for (var current = 0; current < numbers.length; current = current +1) {
    if (numbers[current] > max) {
      max = numbers[current];
    }
  }
  return max;
}

function highest_score(five_dice_rolls) {
  var score;
  score = 0;
  if (Yahtzee(five_dice_rolls) === 50) {
    score = 50;
  }
  if (large_straight(five_dice_rolls) === 40) {
    score = 40;
  }
  if (four_of_a_kind(five_dice_rolls) === sum(five_dice_rolls)) {
    if (score < sum(five_dice_rolls)) {
      score = sum(five_dice_rolls);
    }
  }
  return score;
}

function number_of_rolls() {
  for (var rolls = 0; highest_score(five_dice_rolls()) < 25; rolls = rolls + 1) {
  }
  return rolls;
}
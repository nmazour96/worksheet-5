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

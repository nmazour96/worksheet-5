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
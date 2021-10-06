import fetch from "isomorphic-fetch";

fetch("https://opentdb.com/api.php?amount=1").then(
  console.log
);

fetch("https://opentdb.com/api.php?amount=1")
  .then(response => response.json())
  .then(json => json.results[0])
  .then(console.table);

// Instructions

// 1. Take this data and parse the question and correct answer
// 2. Console.log the question and answer
// Extra Credit: Name the functions

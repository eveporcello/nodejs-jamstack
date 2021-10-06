import fetch from "isomorphic-fetch";

const parseResponseBody = response => response.json();

const grabFirstResult = data => data.results[0];

const filterQuestionAnswer = ({
  question,
  correct_answer: answer
}) => ({
  question,
  answer
});

const print = ({ question, answer }) =>
  console.log(`Question: ${question} Answer: ${answer}`);

fetch("https://opentdb.com/api.php?amount=1")
  .then(parseResponseBody)
  .then(grabFirstResult)
  .then(filterQuestionAnswer)
  .then(print)
  .catch(console.error);

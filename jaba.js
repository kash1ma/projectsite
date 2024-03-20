export function countAnswers(answers) {
  let yesCount = 0;
  let noCount = 0;
  let unsureCount = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === '1') {
      yesCount++;
    } else if (answers[i] === '2') {
      noCount++;
    } else if (answers[i] === '3') {
      unsureCount++;
    }
  }

  return { yesCount, noCount, unsureCount };
}

let answers = ['1', '3', '2', '1', '2', '3'];
let answerCounts = countAnswers(answers);
console.log(answerCounts);
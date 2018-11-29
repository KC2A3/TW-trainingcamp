function SplitIntoLetters(message) {
  let words = message.split('');
  return words;
}

function alphabetSort(word) {
  let wordSort = SplitIntoLetters(word).sort();
  console.log(wordSort.join(''));
}
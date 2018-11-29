function splitString(message) {
  let words = message.split(' ');
  return words;
}

function countWords(sentence) {
  let result = splitString(sentence).length;
  console.log(result);
}
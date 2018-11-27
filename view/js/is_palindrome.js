function reverseString(message) {
  let reverseMessage = message.split('').reverse().join('');
  console.log(message == reverseMessage);
}
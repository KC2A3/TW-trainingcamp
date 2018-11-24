var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findTheElementThatAppearsMostFrequently(array) {
  let newarray = {};
  let maxFrequencyOfOccurrence = 0;
  let theElementThatAppearsMostFrequently = null;
  for (var i = 0; i < array.length; i++) {
    let element = array[i];
    newarray[element] === undefined ? newarray[element] = 1 : (newarray[element]++);
    if (newarray[element] > maxFrequencyOfOccurrence) {
      theElementThatAppearsMostFrequently = element;
      maxFrequencyOfOccurrence = newarray[element];
    }
  }
  return theElementThatAppearsMostFrequently;
}
console.log(findTheElementThatAppearsMostFrequently(array))
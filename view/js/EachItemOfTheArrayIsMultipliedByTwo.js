var array = [1, 2, 3, 4, 5];
var EachItemOfTheArrayIsMultipliedByTwo = array.map(function(item, index, array) {
  return item * 2;
});　　
console.log(EachItemOfTheArrayIsMultipliedByTwo);
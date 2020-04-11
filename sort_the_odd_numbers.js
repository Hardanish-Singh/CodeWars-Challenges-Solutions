//GIVEN AN ARRAY, SORT ONLY ODD NUMBERS IN THE ARRAY WITHOUT THE CHANGING THE POSITIONS OF THE EVEN NUMBERS
function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) continue;
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] % 2 === 0) continue;
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        break;
      }
    }
  }

  let isSorted = true;
  for (let y = 0; y < array.length; y++) {
    if ((y !== array.length - 1 && array[y] % 2 === 0) || array[y + 1] % 2 == 0)
      continue;
    if (y !== array.length - 1 && array[y] > array[y + 1]) {
      isSorted = false;
      break;
    }
  }
  if (isSorted === false) {
    sortArray(array);
  }
  return array;
}

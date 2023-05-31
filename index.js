const array = [
  [
    ['some text', true, [1,2,3,4, [10, 20]]],
  ],
  [
    [1, 2, 3, [100, 200]],
    ['name', 'age']
  ],
];

function deepClone(array) {
  // debugger;
  const newArray = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray.push(array[i].slice())
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

cloneArray = deepClone(array);
console.log(cloneArray);
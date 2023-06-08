// создать метод, который принимает массив примитивов и удаляет дубликаты в нем
// fn([1, 2, '2', true, null, 2, 2, false, true, 'null])
// [1, 2, '2', true, null, false, 'null]

const array = [1, 2, "2", true, null, 2, 2, false, true, "null"];

// const deleteDubs = function (array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== array[i + 1]) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// };

// console.log(deleteDubs(array));

const uniqueArray = array.filter(function (value, index, self) {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);

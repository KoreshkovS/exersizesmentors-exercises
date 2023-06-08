// создать метод, который принимает два массива примитивов и возвращает массив их пересечений
// fn([1, 2, 3, 4, 5], [3, 4, 5, 7, 8])
// [3, 4, 5]

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [3, 4, 5, 7, 8];

const result = function (numbers1, numbers2) {
  const newArray = [];
  for (let number1 of numbers1) {
    // console.log("1st array: ", number1);
    for (let number2 of numbers2) {
      // console.log(number2);
      if (number1 === number2) {
        newArray.push(number1);
      }
    }
  }
  return newArray;
};


console.log(result(numbers1, numbers2));
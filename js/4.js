// создать метод, который принимает массив чисел и число Х, проходится по массиву и для парных индексов - множит на число Х, для непарных - добавляет число Х
// fn([1, 2, 3, 4, 5], 2)
// [3, 4, 6, 8, 8]

const arryMultiplyOrAddNumber = function (numbers, x) {
  const result = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      result.push(number * x);
    } else {
      result.push(number + x);
    }
  }
  return result;
};

console.log(arryMultiplyOrAddNumber([1, 2, 3, 4, 5], 2));

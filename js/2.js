// создать метод, который принимает массив чисел и возвращает только парные
// fn([1, 2, 3, 4, 5])
// [2, 4]

const numbers = [1, 2, 3, 4, 5];
const result = [];

for (let number of numbers) {
  if (number % 2 === 0) {
    result.push(number);
  }
}
console.log(result);

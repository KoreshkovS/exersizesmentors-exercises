// создать метод, который принимает массив чисел и возвращает сумму
// fn([1, 2, 3, 4, 5])
// 15

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let number of numbers) {
  sum += number;
}
console.log(sum);

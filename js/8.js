// создать метод, который принимает целое позитивное число и возращает ряд фибоначчи такой длины
// fn(5)
// [1, 1, 2, 3, 5]

// F(0) = 0,
// F(1) = 1,
// F(2) = F(1) + F(0) = 1 + 0 = 1,
// F(3) = F(2) + F(1) = 1 + 1 = 2,
// F(4) = F(3) + F(2) = 2 + 1 = 3,
// F(5) = F(4) + F(3) = 3 + 2 = 5,

const x = 5;

const fibanachiRow = function (x) {
  const newArray = [1];
  let sum = 0;
  let f0 = 0;
  let f1 = 1;
  for (let i = 0; i < x - 1; i++) {
    sum = f1 + f0;
    f0 = f1;
    f1 = sum;
    newArray.push(sum);
  }
  return newArray;
};

console.log(fibanachiRow(x));

// создать метод, который принимает массив примитивов и удаляет дубликаты в нем
// fn([1, 2, '2', true, null, 2, 2, false, true, 'null])
// [1, 2, '2', true, null, false, 'null]

const arry = [1, 2, "2", true, null, 2, 2, false, true, "null"];

const deleteDubs = function (arry) {
  let newArry = [];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] !== arry[i + 1]) {
      newArry.push(arry[i]);
    }
  }
  return newArry;
};

console.log(deleteDubs(arry));

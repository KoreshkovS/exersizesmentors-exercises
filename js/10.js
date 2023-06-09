// создать метод, который принимает обьект и число и возращает тру или фолс, в зависимости совпадает количество ключей с этим числом
// fn({}, 1); fn({ a: 4 }, 1)
// false; true

// const arrayA = { a: 4 };

// for (let key in arrayA) {
//   console.log(key);
// }

// const keys = Object.keys(arrayA);

// console.log(keys.length);

const arrayCheck = function (jbj, number) {
  const keys = Object.keys(jbj);
  if (keys.length === number) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayCheck({ a: 4 }, 1));

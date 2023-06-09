// создать метод, который принимает обьект и строку и возращает тру или фолс, в зависимости если у этого обьекта такое свойство
// fn({}, 'a'); fn({ a: 4 }, 'a')
// false; true

const test = function (array, x) {
  const letter = "a";
  if (array[letter]) {
    return true;
  } else {
    return false;
  }
};

console.log(test({}, "a"));

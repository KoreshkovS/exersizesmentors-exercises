// создать метод, который принимает строку, и делает ей первую букву капсом, все остальные - с маленькой
// fn('IMpOrtEr')
// Importer

const adapt = function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

console.log(adapt("IMpOrtEr"));
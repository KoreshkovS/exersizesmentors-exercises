// создать метод, который принимает строку, возвращает ее задом - наперед + делает капсом
// fn('abc')
// CBA

const symbols = "abc";

const symbolsBack = symbols[2] + symbols[1] + symbols[0];

console.log(symbolsBack.toLocaleUpperCase());

const name = "Ankit"
let value = 29;
console.log(`My name is ${name} and age is ${value}`)


const  gameName = new String("mari-or");
console.log(gameName.charAt(4))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ankit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('com'))

console.log(gameName.split('-'));
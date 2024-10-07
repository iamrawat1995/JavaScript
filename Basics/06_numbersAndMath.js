const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 123.8797
console.log(otherNum.toPrecision(4))

const hundereds = 1000000;
console.log(hundereds.toLocaleString("en-IN"))
console.log("-------------------------------------------------")

/*************  Maths **************************/
console.log(Math.abs(-4))
console.log(Math.round(4.45))
console.log(Math.floor(4.2))
const arr = [2,1,5,7]
console.log(arr.at(3))
console.log(Math.min(4,2,7,90))


///////Math.random
console.log("-------------------------------------------------")
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
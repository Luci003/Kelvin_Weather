// kelvin value
const kelvin=293;
// celsius value
const celsius= kelvin-273;
// fahrenheit declaration
let fahrenheit = celsius * ( 9 / 5 ) + 32;
// Converting output value in decimal unsing floor
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

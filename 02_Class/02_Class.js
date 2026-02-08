console.log(a);
var a = 10;

let b = 20; // Temporal Dead Zone (TDZ) for 'b'
const c = 30; // Temporal Dead Zone (TDZ) for 'c'

greet();
function greet() {
  console.log("Hello!");
}

console.log(window === this);

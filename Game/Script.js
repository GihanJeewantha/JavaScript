

let x ;
let y ;
let z ;

document.getElementById("rollButton").onclick = function(){

 x = Math.floor(Math.random() * 6)+1;
 y = Math.floor(Math.random() * 6)+1;
 z = Math.floor(Math.random() * 6)+1;
}

console.log(x);
console.log(y);
console.log(z);
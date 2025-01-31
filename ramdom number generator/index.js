
//let random= Math.floor (Math.random()*100)+1;
//console.log(random);

const x = document.getElementById("roll");
const y = document.getElementById("label");
const min= 1;
const max= 6;
let z,w;
x.onclick = function(){
    z=Math.floor(Math.random()*max) ;
    w=z+1;
    y.textContent = w;
}
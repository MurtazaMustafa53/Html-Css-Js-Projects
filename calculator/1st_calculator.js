let x, y, z, names, ffood, email, online, age, student;


//name = window.prompt("what is your name")
x=0;
y=0;
z=0
//document.getElementById("submit").onclick = function(){
//    names = document.getElementById("Name").value;
//    document.getElementById("myh1").textContent = names;
//}


document.getElementById("clear1").onclick = function(){
    x=0;
    y=0;
    z=0;
    document.getElementById("input").textContent = `0`;
}
document.getElementById("clear2").onclick = function(){
    x=0;
    y=0;
    z=0;
    document.getElementById("input").textContent = `0`;
}

document.getElementById("seven").onclick = function(){
    if(x==0){
        x=7;
    }
    else{
        y=7;
    }
    document.getElementById("input").textContent = `7`;
}
document.getElementById("eight").onclick = function(){
    if(x==0){
        x=8;
    }
    else{
        y=8;
    }
    document.getElementById("input").textContent = `8`;
}
document.getElementById("nine").onclick = function(){
    if(x==0){
        x=9
    }
    else{
        y=9;
    }
    document.getElementById("input").textContent = `9`;
}
document.getElementById("four").onclick = function(){
    if(x==0){
        x=4
    }
    else{
        y=4;
    }
    document.getElementById("input").textContent = `4`;
}
document.getElementById("five").onclick = function(){
    if(x==0){
        x=5
    }
    else{
        y=5;
    }
    document.getElementById("input").textContent = `5`;
}
document.getElementById("six").onclick = function(){
    if(x==0){
        x=6
    }
    else{
        y=6;
    }
    document.getElementById("input").textContent = `6`;
}
document.getElementById("one").onclick = function(){
    if(x==0){
        x=1
    }
    else{
        y=1;
    }
    document.getElementById("input").textContent = `1`;
}
document.getElementById("two").onclick = function(){
    if(x==0){
        x=2
    }
    else{
        y=2;
    }
    document.getElementById("input").textContent = `2`;
}
document.getElementById("three").onclick = function(){
    if(x==0){
        x=3
    }
    else{
        y=3;
    }
    document.getElementById("input").textContent = `3`;
}
document.getElementById("zero").onclick = function(){
    if(x==0){
        x=0
    }
    else{
        y=0;
    }
    document.getElementById("input").textContent = `9`;
}
document.getElementById("plus").onclick = function(){
    z = x+y;
    document.getElementById("input").textContent = z;
}
document.getElementById("minus").onclick = function(){
    z = x-y;
    document.getElementById("input").textContent = z;
}
document.getElementById("multi").onclick = function(){
    z = x*y;
    document.getElementById("input").textContent = z;
}
document.getElementById("divide").onclick = function(){
    z = x/y;
    document.getElementById("input").textContent = z;
}
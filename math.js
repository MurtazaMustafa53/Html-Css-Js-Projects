const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const ans = document.getElementById("ans1");
const sub = document.getElementById("submit");
const comment = document.getElementById("com1");
const get = document.getElementById("get");
const mcq1 = document.getElementById("mcq1");
const mcq2 = document.getElementById("mcq2");
const mcq3 = document.getElementById("mcq3");
const mcq4 = document.getElementById("mcq4");
const scoreh1 = document.getElementById("score");
const scorebtn = document.getElementById("scorebtn");
let a,b,c,d,e,f,g,h,i,j,k,l,score=0;


    
get.onclick = function(){
    a=Math.floor((Math.random()*100)+1);
    b=Math.floor((Math.random()*100)+1);
    q1.textContent = a;
    q2.textContent = b;
    f++;
    c=a+b;
    e=Math.floor((Math.random()*4)+1);
    console.log(e);
    get.textContent = "NEXT";
    switch (e) {
        case 1:
            mcq1.textContent = c;
            mcq2.textContent = (Math.floor(c*1.2));
            mcq3.textContent = (Math.floor(c*1.5));
            mcq4.textContent = (Math.floor(c/2));
            break;
        case 2:
            mcq1.textContent = (Math.floor(c/2));
            mcq2.textContent = c;
            mcq3.textContent = (Math.floor(c*1.2));
            mcq4.textContent = (Math.floor(c*1.5));
            break;
        case 3:           
            mcq1.textContent = (Math.floor(c*1.5));
            mcq2.textContent = c;
            mcq3.textContent = (Math.floor(c/2));
            mcq4.textContent = (Math.floor(c*1.2));
            break;
        case 4:
            mcq1.textContent = (Math.floor(c*1.2));
            mcq2.textContent = (Math.floor(c/2));
            mcq3.textContent = (Math.floor(c*1.5));
            mcq4.textContent = c;
            break;    
        default: 
            break;
    }
    }
mcq1.onclick = function(){
    switch (e) {
        case 1:
            score++;
            comment.textContent = "CORRECT! GOOD JOB";
            break;
        case 2:
            comment.textContent = "TRY AGAIN!";
            break;
        case 3:
            comment.textContent = "TRY AGAIN!";
            break;
        case 4:
            comment.textContent = "TRY AGAIN!";
            break;
        default:
            comment.textContent = "ERROR TRY AGAIN!";
            break;
    }
    scoreh1.textContent = `your score is ${score}`;
}
mcq2.onclick = function(){
    switch (e) {
        case 1:
            comment.textContent = "TRY AGAIN!";
            break;
        case 2:
            score++;
            comment.textContent = "CORRECT! GOOD JOB";
            break;
        case 3:
            score++;
            comment.textContent = "CORRECT! GOOD JOB";
            break;
        case 4:
            comment.textContent = "TRY AGAIN!";
            break;
        default:
            comment.textContent = "ERROR TRY AGAIN!";
            break;
    }
    scoreh1.textContent = `your score is ${score}`;
}
mcq3.onclick = function(){
    switch (e) {
        case 1:
            comment.textContent = "TRY AGAIN!";
            break;
        case 2:
            comment.textContent = "TRY AGAIN!";
            break;
        case 3:
            comment.textContent = "TRY AGAIN!";
            break;
        case 4:
            comment.textContent = "TRY AGAIN!";
            break;
        default:
            comment.textContent = "ERROR TRY AGAIN!";
            break;
    }
    scoreh1.textContent = `your score is ${score}`;
}
mcq4.onclick = function(){
    switch (e) {
        case 1:
            comment.textContent = "TRY AGAIN!";
            break;
        case 2:
            comment.textContent = "TRY AGAIN!";
            break;
        case 3:
            comment.textContent = "TRY AGAIN!";
            break;
        case 4:
            score++;
            comment.textContent = "CORRECT! GOOD JOB";
            break;
        default:
            comment.textContent = "ERROR TRY AGAIN!";
            break;
    }
    scoreh1.textContent = `your score is ${score}`;
}
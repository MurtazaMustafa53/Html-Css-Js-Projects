let a=0,b=0,c=0,d,math,english,physics,urdu,computer;
const submit = document.getElementById("p");
const gbtn = document.getElementById("g");
const rbtn = document.getElementById("r");


submit.onclick = function(){
    math=Number(math_input.value);
    english=Number(english_input.value);
    physics=Number(physics_input.value);
    urdu=Number(urdu_input.value);
    computer=Number(computer_input.value);
    a=(math+english+urdu+physics+computer)/5;
    document.getElementById(`percent`).textContent = a;
    document.getElementById(`percenthead`).textContent = "Percentage";
    document.getElementById(`gradehead`).textContent = "Grade";
    document.getElementById(`remarkshead`).textContent = "Remarks";  
    if (a>=80) {
        document.getElementById("grade").textContent = "A+";
        c=1;
    }
    else if (a<80&&a>=70) {
        document.getElementById("grade").textContent = "A";
        c=2;
    }
    else if (70>a&&a>=60) {
        document.getElementById("grade").textContent = "B";
        c=3;
    }
    else if (a<60&&a>=50) {
        document.getElementById("grade").textContent = "C";
        c=4;
    }
    else if (a<50&&a>=40) {
        document.getElementById("grade").textContent = "D";
        c=5;
    }
    else{
        document.getElementById("grade").textContent = "F";
        c=6;
    }

    
    switch (c) {
        case 1:
            document.getElementById("remarks").textContent = "Very Good Keep Up The Good Work⭐⭐";
            break;
        case 2:
            document.getElementById("remarks").textContent = " Good Keep Up The Good Work ";
        break;    
        case 3:
            document.getElementById("remarks").textContent = " Good But you can do a lot better";
        break;    
        case 4:
            document.getElementById("remarks").textContent = "Good effort but you can improve";
        break;
        case 5:
            document.getElementById("remarks").textContent = "nice work but you need to improve a lot";
        break;
        case 6:
            document.getElementById("remarks").textContent = "better luck next time and meet me in my office";
        break;
        
        default:
            document.getElementById("remarks").textContent = " ERROR please try again";
            break;
}
}
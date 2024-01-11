const num1= Math.round(Math.random()*10);
const num2= Math.round(Math.random()*10);
const questionE1= document.getElementById("Question");
const formE1=document.getElementById("form");
const inputE1=document.getElementById("input");
questionE1.innerText=`what is ${num1} multiplied by ${num2}?` 
let score=JSON.parse(localStorage.getItem("score"));
const scoreE1=document.getElementById("Score");

if(!score)
{
    score=0;
}

scoreE1.innerText=`score:${score}`
const correctAns=num1*num2;

formE1.addEventListener("submit",()=>{
   
    const userAns= +inputE1.value;

    if(userAns==correctAns){
        score++;
        updateLocalStorage();
        
        }
        
        else{
            score--;
            updateLocalStorage();
        }
    
});

function updateLocalStorage(){

    localStorage.setItem("score",JSON.stringify(score))
}
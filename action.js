const start=document.querySelector(".start");
const next=document.querySelectorAll(".next");
const exit=document.querySelectorAll(".exit");
const replay=document.querySelector(".replay");
const stat=document.querySelector(".status");
const show=document.querySelector(".showScore");
const scor=document.querySelector(".score");
const actualScore=document.querySelector(".actualScore");
const one=document.querySelectorAll(".op1");
const two=document.querySelectorAll(".op2");
const three=document.querySelectorAll(".op3");
const four=document.querySelectorAll(".op4");

const instruct=document.querySelector(".instruct");
const instructions=document.querySelector(".instructions");
let noScreens=6;


let correctAns=[2,3,1,4,3];
let screens=[];
for(let i=1;i<=noScreens;i++)
screens[i]=document.querySelector(".screen"+i+"");

let a=1,visited=2,score=0;

start.addEventListener('click',()=>{
    screens[a].classList.remove("active");
    screens[a+1].classList.add("active");
    a++;
    stat.innerHTML="Question "+(a-1)+" of 5";
    stat.style.visibility="visible";
});

for(let i=0;i<exit.length;i++)
exit[i].addEventListener('click',()=>{
    screens[1].classList.add("active");
    screens[a].classList.remove("active");
    
    stat.style.visibility="hidden";
    a=1;score=0;visited=2;
    two[0].classList.remove("correct");
    three[1].classList.remove("correct");
    one[2].classList.remove("correct");
    four[3].classList.remove("correct");
    three[4].classList.remove("correct");
});

replay.addEventListener("click",()=>{
    scor.classList.remove("active");
    screens[1].classList.add("active");
    stat.style.visibility="hidden";
    a=1;score=0;visited=2;
    two[0].classList.remove("correct");
    three[1].classList.remove("correct");
    one[2].classList.remove("correct");
    four[3].classList.remove("correct");
    three[4].classList.remove("correct");
})

show.addEventListener("click",()=>{
    
    scor.classList.add("active");
    screens[6].classList.remove("active");
    actualScore.innerHTML="Score: "+score+"/5";
});


for(let i=0;i<next.length;i++)
next[i].addEventListener('click',()=>{
    screens[a].classList.remove("active");
    screens[a+1].classList.add("active");
    a++;visited=a;
    stat.innerHTML="Question "+(a-1)+" of 5";
    two[0].classList.remove("correct");
    three[1].classList.remove("correct");
    one[2].classList.remove("correct");
    four[3].classList.remove("correct");
    three[4].classList.remove("correct");
});


instruct.addEventListener('mouseover',()=>{
    console.log("mouse over");
    instructions.classList.add("active");
});
instruct.addEventListener('mouseout',()=>{
    console.log("mouse out");
    instructions.classList.remove("active");
});



//Logic:
for(let i=0;i<5;i++)
{
    one[i].addEventListener('click',()=>{
        console.log("1 "+i+" clicked");

        //checking
        if(visited==a)
        {
            if(i==2)score++;
            visited++;
            two[0].classList.add("correct");
            three[1].classList.add("correct");
            one[2].classList.add("correct");
            four[3].classList.add("correct");
            three[4].classList.add("correct");
        }


    });
    two[i].addEventListener('click',()=>{
        console.log("2 "+i+" clicked");
        
        //checking

        if(visited==a)
        {
            if(i==0)score++;
            visited++;
            two[0].classList.add("correct");
            three[1].classList.add("correct");
            one[2].classList.add("correct");
            four[3].classList.add("correct");
            three[4].classList.add("correct");
        }
    });
    three[i].addEventListener('click',()=>{
        console.log("3 "+i+" clicked");

        
        //checking
        if(visited==a)
        {
            if(i==1 || i==4)score++;
            visited++;
            two[0].classList.add("correct");
            three[1].classList.add("correct");
            one[2].classList.add("correct");
            four[3].classList.add("correct");
            three[4].classList.add("correct");
            console.log("first click");
        }
    });
    four[i].addEventListener('click',()=>{
        console.log("4 "+i+" clicked");

        
        //checking
        if(visited==a)
        {
            if(i==3)score++;
            visited++;
            two[0].classList.add("correct");
            three[1].classList.add("correct");
            one[2].classList.add("correct");
            four[3].classList.add("correct");
            three[4].classList.add("correct");
        }
    });
    
}



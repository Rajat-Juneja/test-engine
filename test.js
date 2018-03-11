window.addEventListener("load",start);

var ques_no;
var time;
 i = 59;
var answer;
var ans_no;
var ques;
var next;
var prev;
var submit;
var index_ques=1;

var ans1;
var ans2;
var ans3;
var ans4;
 var f=1;


var solution = ["Not Done","Not Done","Not Done","Not Done","Not Done"];





function start(){
   ques_no = document.getElementsByClassName("intern_num");
    time = document.getElementsByClassName("intern_timer");
    answer = document.getElementsByClassName("intern_nop");
    for(var j=0;j<answer.length;j++){
        answer[j].addEventListener("click",highlight);        
    }
    ques=document.getElementsByClassName("intern_statement");
    
    
    
      ans1=document.getElementsByClassName("intern_first");
    ans2=document.getElementsByClassName("intern_second");
    ans3=document.getElementsByClassName("intern_third");
    ans4=document.getElementsByClassName("intern_fourth");
    
    
    
    
    ans_no = document.getElementsByClassName("intern_bl");
    next=document.getElementsByClassName("intern_next");
    prev=document.getElementsByClassName("intern_prev");
    submit=document.getElementsByClassName("intern_submit");
    
    
    submit[0].addEventListener("click",submitfinal);
    next[0].addEventListener("click",nextQues);
    prev[0].addEventListener("click",prevQues);
    getnum();
    gettime();
    if(i>=1){
    setInterval(gettime,1000);}
    makeans(index_ques);
}

function makeans(index_ques){  
    getnum(index_ques);
    ques[0].textContent = ques[0].textContent.split(" ")[0];
     ques[0].textContent = ques[0].textContent.concat(object.questions[index_ques-1].question);
    ans1[0].textContent = object.questions[index_ques-1].op1;
    ans2[0].textContent = object.questions[index_ques-1].op2;
    ans3[0].textContent = object.questions[index_ques-1].op3;
    ans4[0].textContent = object.questions[index_ques-1].op4;
   
}


function nextQues(){
    for(var p=0;p<4;p++){
        if(answer[p].classList.contains("func")){
        solution[index_ques-1] = answer[p].firstChild.nextSibling.lastChild.previousSibling.textContent;
//        console.log(solution[index_ques-1]);
        }}
    nohighlight();
    index_ques++;
    if(index_ques>5){index_ques=5;
        alert("This is the last question");
                    }
    makeans(index_ques);
}

function prevQues(){
    nohighlight();
    index_ques--;
    if(index_ques<1){index_ques=1;
             alert("This is the first question");       }
    makeans(index_ques);
}

function nohighlight(){
    for(var z=0;z<answer.length;z++){
        answer[z].classList.remove("func");
        ans_no[z].classList.remove("func-indi");
    }
}


function highlight(){
    nohighlight();
    event.srcElement.parentElement.classList.toggle("func");
    event.srcElement.firstChild.nextElementSibling.classList.toggle("func-indi");
    
}

function submitfinal(){
    
    if(index_ques == 5){
        for(var p=0;p<4;p++){
        if(answer[p].classList.contains("func")){
        solution[index_ques-1] = answer[p].firstChild.nextSibling.lastChild.previousSibling.textContent;
        }}
    }
    
    f=0;
    i=0;
        alert("First Answer :" + solution[0] + "  -> " + (object.questions[0].correct) + "   Second Answer :" + solution[1] + "  -> " + (object.questions[1].correct) + "     Third Answer :" + solution[2] + "  -> " + (object.questions[2].correct) + "     Fourth Answer :" + solution[3] + "  -> " + (object.questions[3].correct) + "     Fifth Answer :" + solution[4] + "  -> " + (object.questions[4].correct));
    finalscore();
}

function finalscore(){
    var score=0;
    for(var r=0;r<5;r++){
        if(solution[r] == object.questions[r].correct){
            score+=1;
        }
        else{
            score-=0.25;
        }
        
    }
    alert("Your Final Score is : " + score);
}


function gettime(){
   
    if(i==0 && f==1){ 
        f=0;
        submitfinal();
            
    }
    
    
if(i>=10){time[0].textContent = "00:" + i;
         }
    else
    {time[0].textContent = "00:0" + i;}

if(i>0){
    i=i-1;

} 
    
}



function getnum(){
    
    ques_no[0].textContent=index_ques;    
    
}
var myQuestions2 = [
    {
    question: "Q6.Which team lost their first three World Cup finals?",
    answers: {
        a: 'Brazil',
        b: 'Holland (The Netherlands)',
        c: 'Argentina',
        d: 'France'
    },
    correctAnswer: 'Holland (The Netherlands)'
},
{
    question: "Q7.Name a country has won the World Cup twice?",
    answers: {
        a: "England",
        b: "Croatia",
        c: "Italy",
        d: "France"

    },
    correctAnswer: "France"
},
{
    question: "Q8.I've worn numbers 7, 17, 28 and 9 in my career, playing my football across, England, Spain, Italy and Portugal. who am I?",
    answers: {
        a: "Raul",
        b: "Beckham",
        c: "Cristiano Ronaldo",
        d: "Cavani "

    },
    correctAnswer: "Cristiano Ronaldo"
},
{
    question: "Q9.How many times has Rooney won the title of top scorer in the Premier League?",
    answers: {
        a: "Once",
        b: "Twice",
        c: "Three Times",
        d: "Never"

    },
    correctAnswer: "Never"
},
{
    question: "Q10.Two people can make two bicycles in 2 hours. How many people are required to make 12 bicycles in 6 hours?",
    answers: {
        a: "6",
        b: "4",
        c: "3",
        d: "2"

    },
    correctAnswer: "2"
}
];

myCounter = 0;
show2();
function show2() {
    
    document.getElementById("ques").innerHTML = myQuestions2[myCounter].question;
    document.getElementById("labelans1").innerHTML = myQuestions2[myCounter].answers.a;
    document.getElementById("labelans2").innerHTML = myQuestions2[myCounter].answers.b;
    document.getElementById("labelans3").innerHTML = myQuestions2[myCounter].answers.c;
    document.getElementById("labelans4").innerHTML = myQuestions2[myCounter].answers.d;
    

    document.getElementById("answer1").checked=false;
    document.getElementById("answer2").checked=false;
    document.getElementById("answer3").checked=false;
    document.getElementById("answer4").checked=false;
    
    myCounter += 1;
    // document.getElementById("form").style.display="block";
    if (myCounter==myQuestions2.length){
        document.getElementById("end").style.display='block';
        document.getElementById("next").style.display='none';
    }
} 
var score=localStorage.getItem("score");
console.log(score);
let radiox = document.getElementsByName("option");
let answer = document.getElementsByTagName("label");

function out() {
    
    for (let i = 0; i < radiox.length; i++) {
        if (radiox[i].checked) {
            let k=answer[i].innerHTML;
            let x="Q"+String(myCounter);
            localStorage.setItem(x,k);
            console.log(k);
            console.log(myQuestions2[myCounter-1].correctAnswer)
            if ( k == myQuestions2[myCounter-1].correctAnswer) {
                score++;
                console.log(score);
    }
    console.log(score);
    let y=myCounter+5;
    sessionStorage.setItem("you'r answer on Q"+y,answer[i].innerHTML);
    localStorage.setItem("score2",score)
        }
    }
    

}
function y(){
    if (radiox[0].checked ==false &&radiox[1].checked ==false &&radiox[2].checked ==false&&radiox[3].checked ==false  ){
       alert("please select your answer");
    }
    else{
        show2()
    }}
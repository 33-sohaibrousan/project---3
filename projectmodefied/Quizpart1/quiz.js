var myQuestions = [
    {
 question: " Q1.How old was Pele when he scored in his first Football World Cup final?",
 answers: {
     a: "17",
     b: "18",
     c: "19",
     d: "20"

 },
 correctAnswer: "17"
},
{
 question: "Q2.Player known as \"الحكومه\"?",
 answers: {
     a: "Cristiano Ronaldo",
     b: "Leo Messi",
     c: "Kareem Binzima",
     d: "Luka Modric"

 },
 correctAnswer: "Kareem Binzima"
},
{
 question: "Q3.This voice returns to ?",
 answers: {
     a: "Mohammad Sawalha",
     b: "Hafeed Darraje",
     c: "Esam Shawaly",
     d: "Fares Auad"

 },
 correctAnswer: "Hafeed Darraje"
},
{
 question: "Q4.How many goals did Real Madrid receive in its match against Barcelona in 2009?",
 answers: {
     a: "16 goals",
     b: "6 goals",
     c: "8 goals",
     d: "10 goals"

 },
 correctAnswer: "6 goals"
},
{
 question: "Q5.In what year was the Football World Cup first held?",
 answers: {
     a: "1926",
     b: "1930",
     c: "1934",
     d: "1938"

 },
 correctAnswer: "1930"
}
];

myCounter = 0;
shownextQuestion();
function shownextQuestion() {
 
 document.getElementById("ques").innerHTML = myQuestions[myCounter].question;
 document.getElementById("labelans1").innerHTML = myQuestions[myCounter].answers.a;
 document.getElementById("labelans2").innerHTML = myQuestions[myCounter].answers.b;
 document.getElementById("labelans3").innerHTML = myQuestions[myCounter].answers.c;
 document.getElementById("labelans4").innerHTML = myQuestions[myCounter].answers.d;
 

 document.getElementById("answer1").checked=false;
 document.getElementById("answer2").checked=false;
 document.getElementById("answer3").checked=false;
 document.getElementById("answer4").checked=false;
 
 myCounter += 1;
 // document.getElementById("form").style.display="block";
 if (myCounter==myQuestions.length){
     document.getElementById("end").style.display='block';
     document.getElementById("next").style.display='none';
 }
} 

var score=0;
let radiox = document.getElementsByName("option");
let answer = document.getElementsByTagName("label");

function out() {

 for (let i = 0; i < radiox.length; i++) {
     if (radiox[i].checked) {
         let k=answer[i].innerHTML;
         let x="Q"+String(myCounter);
         localStorage.setItem(x,k);
         if ( k == myQuestions[myCounter-1].correctAnswer) {
             score++;
         }
        
     
 
 localStorage.setItem("score",score);
 sessionStorage.setItem("you'r answer on Q"+myCounter,answer[i].innerHTML);
     }
 }}
 function x(){
 if (radiox[0].checked ==false &&radiox[1].checked ==false &&radiox[2].checked ==false&&radiox[3].checked ==false  ){
    alert("please select your answer");
 }
 else{
    shownextQuestion()
 }}
 
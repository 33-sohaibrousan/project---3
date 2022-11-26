let E= JSON.parse(localStorage.getItem("users")) ;
console.log(E);
function signin(){
    

let log_email = document.getElementById("Email1").value;
console.log(log_email);
    
    
let log_pass = document.getElementById("pass11").value;
console.log(log_pass);

for( let i=0;i<E.length ;i++)
{
if(E[i].email != log_email && E[i].password ==log_pass)
{
    alert("email not correct");
}

if(E[i].email == log_email && E[i].password !=log_pass)
{
    alert("password not correct");
}

if(E[i].email == log_email && E[i].password ==log_pass)
{
   

    document.getElementById("signin").href="../welocme/welcome.html";
}


}



}



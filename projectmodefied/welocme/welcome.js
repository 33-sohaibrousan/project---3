let E= JSON.parse(localStorage.getItem("users")) ;

       for( let i=0;i<E.length ;i++)

        document.getElementById("pp").innerHTML=E[i].fname;
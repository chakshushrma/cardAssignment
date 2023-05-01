//getelementbyid()
//getelementbyclassname()
//getelementbytagname()
//querysellectorall

let a=document.getElementById("first")
a.style.color="brown"
let e=document.getElementById("second")
e.style.color="purple"
let f=document.getElementById("third")
f.style.color="green"
// get element by class name
for(let i=0;i<=2;i++){
    let b=document.getElementsByClassName("card-text")
    b[i].style.color="black"
}



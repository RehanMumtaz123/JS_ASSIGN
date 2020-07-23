// 1. Create a signup form and display form data in your web
// page on submission.
var div1=document.createElement("div");
var h1=document.createElement('h1');
h1.appendChild(document.createTextNode("Sign Up Form"))
var para=document.createElement("p");
para.appendChild(document.createTextNode("Login Id"))
var para1=document.createElement("input");
para1.setAttribute('id','two');
para.appendChild(para1);
// --------------
var para_=document.createElement("p");
para_.appendChild(document.createTextNode("Password"))
var para2=document.createElement("input");
para2.setAttribute('id','three')
para_.appendChild(para2);
// -------
div1.setAttribute("class","one");
this.style.textAlign="center";
div1.appendChild(h1);
div1.appendChild(para);
div1.appendChild(para_);
document.body.appendChild(div);

// ----------
function submit(){
    var log=document.getElementById("two")
    var pass=document.getElementById("three")
    console.log(log.value,pass.value)
}



// --------------
var but=document.createElement('button');
but.appendChild(document.createTextNode("Submit Now!"))
but.setAttribute("onclick","submit()")















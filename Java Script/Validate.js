let Active=()=>
{
    let a=document.forms['irctc'].fno.value
    let b=document.forms['irctc'].sname.value
    let c=document.forms['irctc'].pin.value
    let act=true;

if(c.length<=0)
{
    document.getElementById("pin1").innerHTML="Pincode should't Empty..Please fill the input"
    act=false;
}
else if(!((/^[0-9]+$/).test(c)))
{
    document.getElementById("pin1").innerHTML="please enter only numerical numbers"
    act=false;
}
    
if(a.length<=0)
{
    document.getElementById("fdetails").innerHTML="Flat/doorNo/.... shouldt Empty"
    act=false;
}
if(b.length<=0)
{
   document.getElementById("sdetails").innerHTML="StreetName should't Empty"
   act=false;
}
 else if(!((/^[A-Za-z]+$/).test(b)))
{
    document.getElementById("sdetails").innerHTML="please enter only alpha words"
    act=false;   
}

}
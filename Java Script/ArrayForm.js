let datas=["Manoj","Rishi","Sadham","Vasanth"]


let inserting=()=>
{
    const tmp=document.getElementById("users")
    datas.push(tmp.value)
    alert("Your value is added"+tmp.value)
}

let list=()=>
{
    datas.map((data)=>
    {
        document.writeln(data +"<br>")
    })
}
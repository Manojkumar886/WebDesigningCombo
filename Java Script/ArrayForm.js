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

let updating=()=>
{
    let tmp=document.getElementById("users").value
    const newone=prompt("Tell us what is update/Replace"+datas[tmp])
    datas[tmp]=newone;
    list()  
}

var deleting=()=>
{
    const tmp=document.getElementById("users").value
    datas=datas.filter((data)=>
    {
        return data!==tmp
    })
    list()
}
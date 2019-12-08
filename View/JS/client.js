let socket=io.connect()
let user

let msgform = document.getElementById("msgform")
let msg=document.getElementById('msg')


msgform.addEventListener("submit",e=>{
    e.preventDefault()
    socket.emit("send msg",{msg:msg.value})
})

socket.on("front msg",data=>{
    
    let x=document.createElement("p")
    x.innerText=data.user+" : "+data.msg    
    msgform.append(x)
})

socket.on("user",data=>{
    user=data.msg
})
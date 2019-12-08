let socket=io.connect()

socket.emit('test',{d:"Hjkkk"})
socket.on('t2',data=>{
    console.log(data)
})

socket.emit('tx',{yo:"Yommmm"})


let msgform = document.getElementById("msgform")
let msg=document.getElementById('msg')


msgform.addEventListener("submit",e=>{
    e.preventDefault()
    console.log("Yox")
    socket.emit("send msg",{msg:msg.value})
})

socket.on("front msg",data=>{
    let x=document.createElement("p")
    x.innerText=data.user+" : "+data.msg
    
    msgform.append(x)
})

socket.on("teeth",data=>{
    console.log(data)
})
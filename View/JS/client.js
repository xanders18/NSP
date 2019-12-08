let socket = io.connect()
let user = []

let msgContainer = document.getElementById("user-list")
let msgform = document.getElementById("msgform")
let msgPanel=document.getElementById("msgpanel")
let msg = document.getElementById('msg')


msgform.addEventListener("submit", e => {
    e.preventDefault()
    socket.emit("send msg", { msg: msg.value })
})

socket.on("front msg", data => {
    let x = document.createElement("p")
    for(let i=0;i<user.length;i+=2){
        if(data.user==user[i]){            
            x.className="atright"
        }
    }
    x.innerText = data.user+ " : " + data.msg
    msgPanel.append(x)
})

socket.on("new user", data => {
    user=[]
    data.alluser.map(users => {
        if (users !== "dataass") {
            if ((compare(users, user)) === false) {
                user.push(users)
            }
        }
    })
    msgContainer.innerHTML = ""
    user.map(users => {
        let x = document.createElement("p")
        let i=document.createElement("i")
        x.innerText = users
        i.className="fa fa-male"
        msgContainer.append(x)
        msgContainer.append(i)
    })

})

function compare(newdata, data) {
    return data.indexOf(newdata) > -1

}
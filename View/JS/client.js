let socket = io.connect()
let user = []

let msgContainer = document.getElementById("active-user")
let msgform = document.getElementById("msgform")
let msg = document.getElementById('msg')


msgform.addEventListener("submit", e => {
    e.preventDefault()
    socket.emit("send msg", { msg: msg.value })
})

socket.on("front msg", data => {
    let x = document.createElement("p")
    x.innerText = data.user + " : " + data.msg
    msgform.append(x)
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
        x.innerText = users
        msgContainer.append(x)
    })

})

function compare(newdata, data) {
    return data.indexOf(newdata) > -1

}
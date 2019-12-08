let connections
let user = []

exports = module.exports = {
  init: (io) => {
    connections = io
    socketlist = []
    io.on('connection', socket => {      
      socket.on('send msg', data => {
        io.emit('front msg', { msg: data.msg, user: socket.username })
      })
      socket.on('disconnect', data => {       
        for(let i=0;i<user.length;i++){
          if(user[i]==socket.username){
            user[i]="dataass"
          } 
        }
        user=user      
        connections.emit('new user', { alluser: user })
      })

    });
  },
  get: (data) => {    
    connections.on('connection', socket => {            
      socket.username = data
      user.push(data)
      console.log(data)
      //console.log(socket.username)
      connections.emit('new user', { alluser: user })
      //connections.emit('user',{msg:data})
    });
  }

}

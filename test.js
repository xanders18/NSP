let connections
let user = []

//Socket Middleware
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
      connections.emit('new user', { alluser: user })      
    });
  }

}

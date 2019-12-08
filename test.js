let connections

exports = module.exports = {
  init: (io) =>{  
    connections=io
    io.on('connection', socket => {      
      socket.on('send msg', data => {
        io.emit('front msg', { msg: data.msg,user:socket.username })
      })
    });
  },
  get:(data)=>{
    connections.on('connection', socket => {  
      socket.username=data    
      //connections.emit('user',{msg:data})
    });
  }

}
 
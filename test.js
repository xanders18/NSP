let connections

exports = module.exports = {
  init: (io) =>{  
    connections=io
    io.on('connection', socket => {      
      socket.on('send msg', data => {
        io.emit('front msg', { msg: data.msg })
      })
    });
  },
  get:(data)=>{
    connections.on('connection', socket => {      
      connections.emit('teeth',{msg:data})
    });
  }

}
 
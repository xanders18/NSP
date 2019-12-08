let io;
 
module.exports={
    init:httpServer=>{
        console.log("initialized")
        io= require('socket.io')(httpServer);
        //console.log(io)
        return io;
    },
    getIO:()=>{
        
        if(!io){
            throw new Error('Socket.io not established');
        }
        
        return io
    }
}
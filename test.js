
exports = module.exports = function (io) {
  io.on('connection', socket => {
    socket.on('send msg', data => {
      io.emit('front msg', { msg: data.msg })
    })
  });
}
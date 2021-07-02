const connect = (io,socket) => {
    console.log('a user connected');

        /*disconnect*/
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('chat_message', (msg) => {
            io.to('romm_2').emit('get_message', msg);
        });

        /** 
         * Add user the room
         * @string room 
        */
        socket.on('connected_room', function(room) {
            console.log('estamos conectados: ', room)
            socket.join(room);
    });

}

module.exports = {connect};

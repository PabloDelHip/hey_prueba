const { RoomsController } = require('./index');
const { RequestValidation } = require('../../support');
const { MessageDto, UserDto } = require('./dto');

const connect = async (io,socket) => {
        /*disconnect*/
        socket.on('disconnect', async () => {
            try {
                const participants = await RoomsController
                                            .removeParticipant(socket.id)
                io.emit('get_participants', participants);
                
            } catch (error) {
                return {error}
            }
        });

        socket.on('chat_message', async (data, callback) => {
            try {
                const requestData = RequestValidation.fullValidate(MessageDto, data);
                if (requestData.error) console.log(requestData);
                const participants = await RoomsController
                                            .saveMessage(data)
                io.emit('get_message', data);
                callback({data: {status: 201}})
            } catch (error) {
                callback({data:{ status: 500, message: 'failed to connect'}})
            }
            
        });

        /** 
         * Add user the room
         * @string room 
        */
        socket.on('connected_room', async (data, callback)  => {
            try {
                const requestData = RequestValidation.fullValidate(UserDto, data);
                if (requestData.error) console.log(requestData);
                const { user_name, room } = data
                const userData  = {user_name, id_socket: socket.id}
                const participants = await RoomsController
                                            .addParticipant(userData,room)
                io.emit('get_participants', participants);
                callback({data: {status: 201}})
                
            } catch (error) {
                callback({data:{ status: 500, message: 'failed to connect'}})
            }
    });

}

module.exports = {connect};

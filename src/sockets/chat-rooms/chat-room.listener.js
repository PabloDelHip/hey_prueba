const { RoomsController } = require('./index');
const { RequestValidation } = require('../../support');
const { MessageDto, UserDto } = require('./dto');

const connect = async (io,socket) => {
        /**
         * Disconnect
         */
        socket.on('disconnect', async () => {
            try {
                const participants = await RoomsController
                       .removeParticipant(socket.id)
                io.emit('get_participants', participants);                
            } catch (error) {
                return {error}
            }
        });

        /**
         * receive, save and issue get_message
         * @param {Object} data Message data
         * @param {Object} callback Callback
         */
        socket.on('chat_message', async (data, callback) => {
            try {
                const requestData = RequestValidation.fullValidate(MessageDto, data);
                if (requestData.error) callback({data:{ status: 500, message: 'failed to connect'}})
                await RoomsController.saveMessage(data)
                io.emit('get_message', data);
                callback({data: {status: 201}})
            } catch (error) {
                callback({data:{ status: 500, message: 'failed to connect'}})
            }
            
        });

        /**
         * Add a user to the room and issue get_participants
         * @param {Object} data Participant data
         * @param {Object} callback Callback
         */
        socket.on('connected_room', async (data, callback)  => {
            try {
                const requestData = RequestValidation.fullValidate(UserDto, data);
                if (requestData.error) callback({data:{ status: 500, message: 'failed to connect'}})
                const { user_name } = data
                const userData  = {user_name, id_socket: socket.id}
                const participants = await RoomsController
                                            .addParticipant(userData)
                io.emit('get_participants', participants);
                callback({data: {status: 201}})
                
            } catch (error) {
                callback({data:{ status: 500, message: 'failed to connect'}})
            }
    });

}

module.exports = {connect};

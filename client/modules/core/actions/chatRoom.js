export default {

  createRoom({Meteor, LocalState}, {roomName}) {
    Meteor.call('chatRoom.createRoom', roomName, (err, res) => {
      if(err) {
        return console.error('Error durng action chatRoom call chatRoom.createRoom', err);
      }
      console.warn('New room successfuly created.');
    });
  },

  sendMessage({Meteor}, roomId, message) {
    Meteor.call('chatRoom.sendMessage', roomId, message, (err, res) => {
      if(err) {
        return console.error('Error durng action chatRoom call chatRoom.sendMessage', err);
      }
      console.warn('New message successfuly sent.');
    });
  }

};

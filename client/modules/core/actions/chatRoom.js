export default {
  createRoom({Meteor, LocalState}, {roomName}) {
    Meteor.call('chatRoom.createRoom', roomName, (err, res) => {
      if(err) {
        return console.error('Error durng action chatRoom call chatRoom.createRoom', err);
      }
      console.warn('New room successfuly created');
    });
  }
};

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Rooms} from '/lib/collections';
import UserHelpers from '../lib/userHelpers'

export default function () {

  Meteor.methods({
    'chatRoom.createRoom'(roomName) {
      check(roomName, String);
      const currentUserName = UserHelpers.getFirstNameByUserId(this.userId);

      Rooms.insert({createdAt: new Date(), room: roomName, createdBy: currentUserName, messages: [], online: []});
      console.warn('New room successfuly created');
    }
  });

  Meteor.methods({
    'chatRoom.sendMessage'(roomId, message) {
      check(roomId, String);
      check(message, String);
      const currentUserName = UserHelpers.getFirstNameByUserId(this.userId);

      Rooms.update( {_id: roomId}, {$push: { messages: {sent: new Date(), by: currentUserName, userId: this.userId, message} }});
      console.warn('New room successfuly created');
    }
  });

}

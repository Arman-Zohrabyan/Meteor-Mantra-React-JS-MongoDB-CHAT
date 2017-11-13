import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Rooms} from '/lib/collections';

export default function () {

  Meteor.publish('chatRoom.getRooms', function () {
    return Rooms.find({}, {fields: {messages: 0}});
  });

  Meteor.publish('chatRoom.getMessages', function (roomId) {
  	check(roomId, String);
    return Rooms.find({_id: roomId}, {fields: {messages: 1, room: 1}});
  });

}

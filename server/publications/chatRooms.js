import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Rooms} from '/lib/collections';

export default function () {

  Meteor.publish('chatRoom.getRooms', function () {
    return Rooms.find({}, {_id : 1, createdAt: 1, name: 1, createdBy: 1, messages: 0});
  });

}

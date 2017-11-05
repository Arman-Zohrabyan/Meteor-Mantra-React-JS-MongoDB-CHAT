import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Rooms} from '/lib/collections';
import UserHelpers from '../lib/userHelpers'

export default function () {
  Meteor.methods({
    'chatRoom.createRoom'(roomName) {
      check(roomName, String);
      const currentUserName = UserHelpers.getFirstNameByUserId(this.userId);

      Rooms.insert({createdAt: new Date(), room: roomName, createdBy: currentUserName, messages: {}, online: []});
      console.warn('New room successfuly created');
    }
  });
}

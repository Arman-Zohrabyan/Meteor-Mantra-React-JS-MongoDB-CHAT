import ChatRooms from '../components/chatRooms';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import {Rooms} from '/lib/collections';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.userId()) {
    if(Meteor.subscribe('chatRoom.getRooms').ready()) {
      const rooms = Collections.Rooms.find({}).fetch();
      onData(null, {rooms});
    }
  } else {
    FlowRouter.redirect('/log-in');
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatRooms);

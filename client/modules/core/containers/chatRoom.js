import ChatRoom from '../components/chatRoom';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import {Rooms} from '/lib/collections';

export const composer = ({context, roomId}, onData) => {
  if(Meteor.userId()) {
    onData(null, {roomId});
  } else {
    FlowRouter.redirect('/log-in');
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  sendMessage: actions.chatRoom.sendMessage
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatRoom);

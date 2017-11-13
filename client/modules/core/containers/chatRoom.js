import ChatRoom from '../components/chatRoom';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, roomId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.userId()) {
    if(Meteor.subscribe('chatRoom.getMessages', roomId).ready()) {
      let room = Collections.Rooms.find({}).fetch();
      room = room[0];
      onData(null, {room, currentUserId: Meteor.userId()});
    }
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

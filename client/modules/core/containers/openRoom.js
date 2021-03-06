import OpenRoom from '../components/openRoom';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  if(Meteor.userId()) {
    onData(null, {});
  } else {
    FlowRouter.redirect('/log-in');
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  createRoom: actions.chatRoom.createRoom
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OpenRoom);

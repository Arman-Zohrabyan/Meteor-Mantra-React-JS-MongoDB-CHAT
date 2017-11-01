import Rooms from '../components/rooms';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, form}, onData) => {
  if(Meteor.userId()) {
    onData(null, {});
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
)(Rooms);

import Navigation from '../components/navigation';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  if(Meteor.userId()) {
    onData(null, {isRegistered: true});
  } else {
    onData(null, {isRegistered: false});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Navigation);

import LogInForm from '/lib/logInForm';
import RegistrationForm from '/lib/registrationForm';

import LogIn from '../components/logIn';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, form}, onData) => {
  const { LocalState, Meteor } = context();
  if(!Meteor.userId()) {
    const forms = {LogInForm, RegistrationForm};
    const FormHelper = forms[form];
    onData(null, { FormHelper, infoAboutRegistration: LocalState.keys['REGISTRATION'] });
  } else {
    FlowRouter.redirect('/rooms');
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  authenticationRequest: actions.authentication.authenticationRequest,
  removeInfoAboutRegistration: actions.authentication.removeInfoAboutRegistration
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LogIn);

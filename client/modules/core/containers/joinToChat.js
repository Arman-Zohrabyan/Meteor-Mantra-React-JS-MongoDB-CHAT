import LogInForm from '/lib/logInForm';
import RegistrationForm from '/lib/registrationForm';

import LogIn from '../components/logIn';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, form}, onData) => {
	const forms = {LogInForm, RegistrationForm};
	const FormHelper = forms[form];
	
  onData(null, { FormHelper });
};

export const depsMapper = (context, actions) => ({
  //context: () => context,
  //checkToken: actions.serviceIntegrations.checkReCaptchaToken
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LogIn);

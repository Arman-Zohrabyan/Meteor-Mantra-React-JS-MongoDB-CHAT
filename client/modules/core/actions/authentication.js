import AuthHelpers from '/client/lib/authenticationHelpers';

export default {
  removeInfoAboutRegistration({LocalState}) {
    return LocalState.set('REGISTRATION', null);
  },

  authenticationRequest({Meteor, LocalState, FlowRouter}, type, formValues, getErr) {
    if(type === 'registration') {
      Meteor.call('authentication.registration', formValues, (err, res) => {
        if(err) {
          console.error('Error durng action authentication call authentication.registration', err);
        } else {
          if(res[0] === 400) {
            console.error('Name or Email already exist.');
            const errorMsg = AuthHelpers.createRegistrationErrorMessage(res[1]);
            getErr(res[1], errorMsg);
          } else {
            console.warn('User successfully created');
            LocalState.set('REGISTRATION', 'You have successfully registered!');
            FlowRouter.go('authentication.logIn');
          }
        }
      });
    } else if (type === 'login') {
      const password = Package.sha.SHA256(formValues.password);
      const email = formValues.email;
      Meteor.call('authentication.logIn', email, password, (err, res) => {
        if(err) {
          console.error('Error durng action authentication call authentication.logIn', err);
        } else {
          if(res[0] === 400) {
            console.error('Email or Password not found.');
            const errorMsg = AuthHelpers.createLogInErrorMessage(res[1]);
            getErr(res[1], errorMsg);
          } else {
            console.warn('WELCOME!');
            Meteor.loginWithToken(res[1]);
            FlowRouter.go('chat.rooms');
          }
        }
      });
    }
  }
};

import AuthHelpers from '/client/lib/authenticationHelpers';

export default {
  removeInfoAboutRegistration({LocalState}) {
    return LocalState.set('REGISTRATION', null);
  },

  authenticationRequest({Meteor, LocalState, FlowRouter}, type, formValues, getErr) {
    if(type === 'registration') {
      const _id = Meteor.uuid();
      Meteor.call('authentication.registration', _id, formValues, (err, res) => {
        if(err) {
          console.error('Error durng action authentication call authentication.registration', err);
        } else {
          if(res === true) {
            console.warn('User successfully created');
            LocalState.set('REGISTRATION', 'You have successfully registered!');
            FlowRouter.go('authentication.logIn');
          } else {
            console.error('Name or Email already exist.');
            const errorMsg = AuthHelpers.createRegistrationErrorMessage(res);
            getErr(res, errorMsg);
          }
        }
      });
    } else if (type === 'login') {
      Meteor.call('authentication.logIn', formValues, (err, res) => {
        if(err) {
          console.error('Error durng action authentication call authentication.logIn', err);
        } else {
          if(res._id) {
            console.warn('WELCOME!');
            Meteor.loginWithToken(res._id)
            FlowRouter.go('chat.rooms');
          } else {
            console.error('Email or Password not found.');
            const errorMsg = AuthHelpers.createLogInErrorMessage(res);
            getErr(res, errorMsg);
          }
        }
      });
    }
  }
};

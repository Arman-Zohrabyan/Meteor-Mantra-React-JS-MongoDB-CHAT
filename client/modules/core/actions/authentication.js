import AuthHelpers from '/client/lib/authenticationHelpers';

export default {
  create({Meteor, LocalState, FlowRouter}, title, content) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('posts.create', id, title, content, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go(`/post/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
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
            FlowRouter.go('chat.logIn');
          } else {
            console.error('Name or Email already exist');
            const errorMsg = AuthHelpers.createRegistrationErrorMessage(res);
            getErr(res, errorMsg);
          }
        }
      });
    } else if (type === 'login') {

    }
  }
};

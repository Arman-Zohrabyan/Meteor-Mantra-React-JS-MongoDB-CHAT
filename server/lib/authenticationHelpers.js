export default class AuthHelpers {

  static valuesEmailAndName(email, name) {
    if (!email) {
      console.error('Error during isEmailAndNameFree: ', 'email is required');
    } else if (!name) {
      console.error('Error during isEmailAndNameFree: ', 'name is required');
    }
    const isEmailFree = !(Meteor.users.find({ email }).fetch().length);
    const isNameFree = !(Meteor.users.find({ name }).fetch().length);
    if(isEmailFree && isNameFree) {
      return 'free';
    }
    return {email: !isEmailFree, name: !isNameFree};
  }

  static isCorrectEmail(email) {
    if (!email) {
      console.error('Error during isCorrectEmail: ', 'email is required');
    }
    const existEmail = (Meteor.users.find({ email }).fetch().length === 1);
    return existEmail;
  }

  static isCorrectPassword(email, password) {
    if (!email) {
      console.error('Error during isCorrectPassword: ', 'email is required');
    } else if (!password) {
      console.error('Error during isCorrectPassword: ', 'password is required');
    }
    const existEmail = (Meteor.users.find({email, password}).fetch().length === 1);
    return existEmail;
  }

}

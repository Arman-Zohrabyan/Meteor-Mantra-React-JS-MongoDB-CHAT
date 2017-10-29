import {Users} from '/lib/collections';

export default class AuthHelpers {

  static valuesEmailAndName(email, name) {
    if (!email) {
      console.error('Error during isEmailAndNameFree: ', 'email is required');
    } else if (!name) {
      console.error('Error during isEmailAndNameFree: ', 'name is required');
    }

    const isEmailFree = !(Users.find({ email }).fetch().length);
    const isNameFree = !(Users.find({ name }).fetch().length);
    if(isEmailFree && isNameFree) {
      return 'free';
    }
    return {email: !isEmailFree, name: !isNameFree};
  }
}

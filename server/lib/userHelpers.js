import {Meteor} from 'meteor/meteor';

export default class UserHelpers {

  static getFirstNameByUserId(_id) {
    const user = Meteor.users.findOne({_id});
    return user.profile.name;
  }

}

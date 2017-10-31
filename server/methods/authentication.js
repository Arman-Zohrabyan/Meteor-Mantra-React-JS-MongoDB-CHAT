import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import AuthHelpers from '../lib/authenticationHelpers';

export default function () {
  Meteor.methods({
    'authentication.registration'(formValues) {
      check(formValues, Object);

      const valuesEmailAndName = AuthHelpers.valuesEmailAndName(formValues.email, formValues.username);

      if(valuesEmailAndName === 'free') {
        const userId = Accounts.createUser({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          profile: {
            name: formValues.name,
            createdOn: new Date()
          }
        });
        AuthHelpers.changeUserDataStructure(userId, {phone: formValues.phone});
        return true;
      }
      console.warn('Warn during method authentication.registration user and email already exist');
      return valuesEmailAndName;
    }
  });

  Meteor.methods({
    'authentication.logIn'(email, password) {
      check(email, String);
      check(password, String);

      if(!AuthHelpers.isCorrectEmail(email)) {
        return [400, {email: true, password: true}];
      }

      const user = Meteor.users.findOne({emails: {$elemMatch: {address: email}}});

      password = {digest: password, algorithm: 'sha-256'};
      const checkPassword = Accounts._checkPassword(user, password);

      if(checkPassword.error) {
        return [400, {password: true}];
      }
      return AuthHelpers.saveLoginToken(user._id);
    }
  });
}

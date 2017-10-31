import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import AuthHelpers from '../lib/authenticationHelpers';

export default function () {
  Meteor.methods({
    'authentication.registration'(formValues) {
      check(formValues, Object);

      const valuesEmailAndName = AuthHelpers.valuesEmailAndName(formValues.email, formValues.username);

      if(valuesEmailAndName === 'free') {
        const accId = Accounts.createUser({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          phone: formValues.phone,
          profile: {
            name: formValues.username,
            createdOn: new Date()
          }
        });
        return true;
      }
      console.warn('Warn during method authentication.registration user and email already exist');
      return valuesEmailAndName;
    }
  });

  Meteor.methods({
    'authentication.logIn'(formValues) {
      check(formValues, Object);
      const { email, password } = formValues;

      const isCorrectEmail = AuthHelpers.isCorrectEmail(email);

      if(isCorrectEmail) {
        const isCorrectPassword = AuthHelpers.isCorrectPassword(email, password);

        if(isCorrectPassword) {
          return Meteor.users.findOne({email, password});
        }
        console.warn('Warn during method authentication.logIn incorrect password');
        return {password: true};
      }
      console.warn('Warn during method authentication.logIn incorrect email and password');
      return {email: true, password: true};
    }
  });
}

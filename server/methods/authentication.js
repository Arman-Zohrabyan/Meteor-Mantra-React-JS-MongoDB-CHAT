import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import AuthHelpers from '../lib/authenticationHelpers';

export default function () {
  Meteor.methods({
    'authentication.registration'(_id, formValues) {
      check(_id, String);
      check(formValues, Object);

      const valuesEmailAndName = AuthHelpers.valuesEmailAndName(formValues.email, formValues.name);

      if(valuesEmailAndName === 'free') {
        const createdAt = new Date();
        const userData = Object.assign({_id, createdAt}, formValues);
        Meteor.users.insert(userData, (err) => {
          if(err) {
            console.error('Error during insert into Meteor.users collection in method authentication.registration: ', err);
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

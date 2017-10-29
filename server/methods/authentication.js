import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import AuthHelpers from '../lib/authenticationHelpers';
import {Users} from '/lib/collections';

export default function () {
  Meteor.methods({
    'authentication.registration'(_id, formValues) {
      check(_id, String);
      check(formValues, Object);

      const valuesEmailAndName = AuthHelpers.valuesEmailAndName(formValues.email, formValues.name);

      if(valuesEmailAndName === 'free') {
        const createdAt = new Date();
        const userData = Object.assign({_id, createdAt}, formValues);
        Users.insert(userData, (err) => {
          if(err) {
            console.error('Error during insert into Users collection in method authentication.registration: ', err);
          }
        });
        return true;
      }
      console.warn('Warn during method authentication.registration user and email already exist');
      return valuesEmailAndName;
    }
  });

  /*Meteor.methods({
    'posts.createComment'(_id, postId, text) {
      check(_id, String);
      check(postId, String);
      check(text, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const author = 'The User';
      const comment = {_id, postId, author, text, createdAt};
      Comments.insert(comment);
    }
  });*/
}

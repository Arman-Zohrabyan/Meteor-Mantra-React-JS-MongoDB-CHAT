export default class AuthHelpers {

  static generateLoginToken() {
    const stampedToken = Accounts._generateStampedLoginToken();
    return [
      stampedToken,
      Accounts._hashStampedToken(stampedToken)
    ];
  }

  static saveLoginToken(userId) {
    return Meteor.wrapAsync(function(userId, tokens, cb){
        // In tokens array first is stamped, second is hashed
        // Save hashed to Mongo
        Meteor.users.update(userId, {
            $push: {
                'services.resume.loginTokens': tokens[1]
            }
        }, function(error){
            if (error){
                cb(new Meteor.Error(500, 'Couldnt save login token into user profile'));
            }else{
                // Return stamped to user
                cb && cb(null, [200,tokens[0].token]);
            }
        });
    })(userId, AuthHelpers.generateLoginToken());
  }





  static valuesEmailAndName(email, username) {
    if (!email) {
      console.error('Error during isEmailAndNameFree: ', 'email is required');
    } else if (!username) {
      console.error('Error during isEmailAndNameFree: ', 'username is required');
    }
    const isEmailFree = !(Meteor.users.find({emails: {$elemMatch: {address: email}}}).fetch().length);
    const isNameFree = !(Meteor.users.find({ username }).fetch().length);
    if(isEmailFree && isNameFree) {
      return 'free';
    }
    return {email: !isEmailFree, username: !isNameFree};
  }

  static isCorrectEmail(email) {
    if (!email) {
      console.error('Error during isCorrectEmail: ', 'email is required');
    }
    const existEmail = (Meteor.users.find({emails: {$elemMatch: {address: email}}}).fetch().length === 1);
    return existEmail;
  }


  

  static isCorrectPassword(email, password) {
    if (!email) {
      console.error('Error during isCorrectPassword: ', 'email is required');
    } else if (!password) {
      console.error('Error during isCorrectPassword: ', 'password is required');
    }
    const existEmail = (Meteor.users.find({emails: {$elemMatch: {address: email}}, password}).fetch().length === 1);
    return existEmail;
  }

}

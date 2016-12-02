import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

export const signupAccountOnServer = (doc) => {
if (Meteor.users.findOne({ 'emails.address': doc.email })) {
  throw new Meteor.Error('signup.emailExists', 'a user with this email address exists')
} else {

    try {

      const {username, email, password} = doc
      const userId = Accounts.createUser({username, email, password})

      if (userId) {


        try {
          Accounts.sendVerificationEmail(userId);
        } catch (error) {
          console.log(`server.signup.sendVerificationEmailError :\n${error}\n`)
        }
      }


    } catch (error) {

          console.log(`signup.createProfile \n${error}\n`)
          Meteor.users.remove(userId)
          throw new Meteor.Error('signup.createProfile', 'could not create user master profile and rolled back')
    }

    return 'OK'
  }
}

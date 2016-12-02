import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SHA256 } from 'meteor/sha';

const hashedPassword = (password) => {
  return { digest: SHA256( password ), algorithm: 'sha-256'};
}

export const signupSchema = new SimpleSchema({
  password: {
    type: String,
    min: 6,
    max: 256,
  },
  username: {
    type: String,
    max: 256,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  }
})

export const signupAccount = new ValidatedMethod({

  name: 'meteor.users.signupAccount',

  validate: signupSchema.validator({clean: true}),

  run({password, ...user}) {
    this.unblock()

    if (this.userId) {
      throw new Meteor.Error('meteor.users.signupAccount.alreadyLoggedIn', 'You already have a user and you are logged in.')
    }

    if (Meteor.isServer) {
    import { signupAccountOnServer } from './server'
      return signupAccountOnServer({...user, password: hashedPassword(password)}) // returns 'OK'
    }

    return 'OK'

  }
})

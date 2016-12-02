import { Accounts } from 'meteor/accounts-base'

Accounts.config({
  forbidClientAccountCreation: false,
  sendVerificationEmail: false,
  loginExpirationInDays: null,
  passwordResetTokenExpirationInDays: 99
})

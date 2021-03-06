import { Meteor } from 'meteor/meteor';

const {
  emails: {
    fromName: FROM_NAME,
    from: FROM_EMAIL,
    support: SUPPORT_EMAIL,
  },
  basicauth: {
    'protected': BASIC_AUTH,
    user: BASIC_AUTH_USER,
    password: BASIC_AUTH_PASSWORD
  },
} = Meteor.settings;

export const PrivateSettings = {
  FROM_NAME,
  FROM_EMAIL,
  SUPPORT_EMAIL,
  BASIC_AUTH,
  BASIC_AUTH_USER,
  BASIC_AUTH_PASSWORD,
};

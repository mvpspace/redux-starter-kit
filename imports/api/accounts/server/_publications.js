import { Meteor } from 'meteor/meteor'

Meteor.publish('global.accounts.currentUser', function () {
  this.unblock()
  const { userId } = this;
  if (userId) {
    return Meteor.users.find(
      userId,
      {
        fields: {
          _id: 1,
          createdAt: 1
        }
      }
    )
  } else {
    this.ready()
  }
})

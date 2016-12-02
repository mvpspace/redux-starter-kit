import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { store, setGlobalData } from '/imports/environment/ui-state'

Meteor.startup(() => {

  const subscriptionHandles = []
  subscriptionHandles.push(Meteor.subscribe('global.accounts.currentUser'))

  Tracker.autorun((computation) => {

    const currentUser = Meteor.user()
    const currentUserId = Meteor.userId()

    if (_.every(subscriptionHandles, handle => handle.ready()))
    {

      let data = {
        currentUser: {
          user: Meteor.user()
        },
        siteLoading: !!Meteor.loggingIn()
      }

      store.dispatch(setGlobalData('SET_GLOBAL_DATA', data))
    }
  })
})

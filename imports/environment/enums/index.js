import { Meteor } from 'meteor/meteor'

export { TOAST_MODIFIER } from './_enums'

export const SETTING_PRIVATE = (() => {
    if (Meteor.isServer){
import { PrivateSettings } from './_settings-private'
  return PrivateSettings
} else {
  return {}
}
})()

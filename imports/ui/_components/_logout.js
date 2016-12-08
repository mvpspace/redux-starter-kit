import React, { PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import { browserHistory } from 'react-router'
import { Intent } from "@blueprintjs/core"
import { Toast } from "/imports/ui/_components"
import { TOAST_MODIFIER } from '/imports/environment/enums'

export const Logout = ({ nextPathname = '/login' }) => {
  const logout = () => {
    Meteor.logout(err => {
      if (!err) {
        Toast.show({
          message: "Logged Out",
          iconName:'pt-icon-info-sign',
          intent: Intent.WARNING,
          modifiers: [TOAST_MODIFIER.PILE]
        })
        browserHistory.push(nextPathname)
      }
    })
  }
  return (
    <div>
      <p><a onClick={logout}>Logout</a></p>
    </div>
  )
}

Logout.PropTypes = {
  nextPathname: PropTypes.string
}
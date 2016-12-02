import React, { PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import { browserHistory } from 'react-router'
import { Position, Toaster, Intent } from "@blueprintjs/core"

export const Logout = ({ nextPathname = '/login' }) => {
  const logout = () => {
    Meteor.logout(err => {
      if (!err) {
        const toast = Toaster.create({position: Position.TOP})
        toast.show({message: 'Logged out', iconName:'pt-icon-info-sign', intent: Intent.WARNING})
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
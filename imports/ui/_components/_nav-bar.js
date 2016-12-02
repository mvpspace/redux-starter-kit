import React from 'react'
import { Logout } from '/imports/ui/_components'

export const NavBar = () => (
<div>
  <nav className="pt-navbar pt-dark">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">Meteor Mentor</div>
      </div>
      <div className="pt-navbar-group pt-align-right">
        <Logout />
      </div>
  </nav>
</div>
)

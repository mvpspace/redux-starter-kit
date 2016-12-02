import React, { PropTypes, Component } from 'react'

export const UserLabel = ({name}) => {
  return (
    <div>
    <p>
      <span className="pt-icon-large pt-icon-user"></span>&nbsp;
      <span className={`pt-tag pt-round ${name!=='none' ? 'pt-intent-success' : null }`}>  User: {name}</span>
    </p>
    </div>
  )
}

UserLabel.PropTypes = {
  name: PropTypes.string.isRequired
}

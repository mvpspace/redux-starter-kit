import React from 'react'
import { UserLabel } from './'

export const Welcome = ({title, subtitle, text, name}) => (
  <div className="pt-card .modifier">
    <UserLabel name={name}/>
    <h4>{title}</h4>
    <h6>{subtitle}</h6>
    {text}
  </div>
)

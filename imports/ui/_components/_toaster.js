import React, { Component, PropTypes } from 'react'
import ReactDOM from "react-dom"
import { Position, Toaster } from "@blueprintjs/core";
import { TOAST_MODIFIER } from '/imports/environment/enums'

// Overriding the Toaster create function to get rid of the `inline` tag in the original repo
Toaster.create = function(props){
  const containerElement = document.createElement("div");
  document.body.appendChild(containerElement);
  return ReactDOM.render(<Toaster {...props} /> , containerElement)
}

export const Toast = Toaster.create({
  position: Position.TOP,
  inline: false
})

Toast.show = function ({action, className, iconName, intent, message, onDismiss, timeout, modifiers = []} = {}) {
  if (modifiers.length > 0) {
    if (modifiers.includes(TOAST_MODIFIER.CLEAR_ALL)) this.clear()
    if (modifiers.includes(TOAST_MODIFIER.PILE)) {
      const pileToast = Toaster.create(this.props)
      return this.__proto__.show.apply(pileToast, arguments)
    }
  }
  return this.__proto__.show.apply(this, arguments)

}
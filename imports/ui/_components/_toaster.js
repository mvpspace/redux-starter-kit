import React, { Component, PropTypes } from 'react'
import ReactDOM from "react-dom"
import { Position, Toaster } from "@blueprintjs/core";

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

Toast.show = function ({action, className, iconName, intent, message, onDismiss, timeout, routeSwitch = false} = {}) {
  if (Toast.state.toasts && Toast.state.toasts.length > 0) {
    if (routeSwitch) Toast.clear()
  }
    this.__proto__.show.apply(this, arguments)

}
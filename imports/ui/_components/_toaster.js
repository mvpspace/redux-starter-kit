import { Position, Toaster } from "@blueprintjs/core"

export const Toast = (className = '', position = Position.BOTTOM_RIGHT) => {
  Toaster.create({
    className: className,
    position: position
  })
}
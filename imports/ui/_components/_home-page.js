import React, { PropTypes, Component } from 'react'
import { Welcome } from '/imports/ui/_components'

export class HomePage extends Component {

  static PropTypes = {
    currentUser: PropTypes.object
  }

  render() {
    const { currentUser } = this.props
    const content = {
      title: 'Example Card',
      subtitle: 'This is just an example',
      name: currentUser && currentUser.user ? currentUser.user.username : 'no name',
      text: currentUser && currentUser.user ?
        `What you got: You have ROUTING (by React Route), STATE MANAGEMENT (by Redux),
         UI (by Blueprint js), everything else (by Meteor)`
        :
        `You need to login first to read on boarding instructions`
    }

    return (
     <div>
       <Welcome {...content} />
     </div>
    )
  }
}

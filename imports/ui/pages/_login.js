import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { AutoForm } from 'uniforms-unstyled'
import { Intent } from "@blueprintjs/core"
import { Toast } from "/imports/ui/_components"
import { Flex, Box } from 'reflexbox'
import { TextField, SubmitField } from '/imports/ui/_components/uniforms'

export class Login extends Component {

  userLoginSchema = new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
    },
    password: {
      type: String,
      min: 6,
    }
  })


  registerUser() {
    browserHistory.push('/signup')
  }

  handleLogin(doc) {
    this.userLoginSchema.clean(doc);
    const {email,password} = doc;
    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        Toast.show({ message: error.reason, iconName:'pt-icon-error', intent: Intent.DANGER })
      }
      else {
        Toast.show({ message: "Logged In!", iconName:'pt-icon-tick', intent: Intent.SUCCESS })
        browserHistory.push('/')
      }
    })
  }

  render() {
    return (
      <Flex align='center' justify='space-around'>
        <Box py={6}>
          <div className="pt-control-group pt-vertical" style={ {width: '300px'}}>
          <h3>Login</h3>
            <AutoForm
              ref={(loginForm) => { this.loginForm = loginForm }}
              schema={ this.userLoginSchema }
              onSubmit={ doc => this.handleLogin(doc) }
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  this.loginForm.submit()
                }

              }}
            >
              <TextField
                name='email'
                className='pt-large'
                placeholder='Email'
                iconInner={true}
                iconClasses='pt-icon pt-icon-person'
              />
              <TextField
                name='password'
                type='password'
                className='pt-large'
                placeholder='Password'
                iconInner={true}
                iconClasses='pt-icon pt-icon-lock'
              />
              <SubmitField
                className='pt-button pt-large pt-intent-primary'
                style={ {width: '300px'}}
              >Login</SubmitField>
            </ AutoForm>
            <p>
              <a className="pt-icon pt-icon-new-person" onClick={this.registerUser}> Register a new User</a>
            </p>
          </div>
        </Box>
      </Flex>
    )
  }
}
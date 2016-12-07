import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import { Link, browserHistory } from 'react-router'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { AutoForm } from 'uniforms-unstyled'
import { Intent } from '@blueprintjs/core'
import { Flex, Box } from 'reflexbox'
import { SETTING_PUBLIC } from '/imports/environment/enums'
import { TextField, SubmitField } from '/imports/ui/_components/uniforms'
import { signupAccount, signupSchema } from '/imports/api/accounts/methods'
import { Toast } from "/imports/ui/_components"

export class Signup extends Component {

  userSignupSchema = signupSchema

  loginUser() {
    browserHistory.push('/')
  }

  handleSignup(doc) {
    this.userSignupSchema.clean(doc)
    const {email, password} = doc

    signupAccount.call(doc, (error, result) => {

      if (error) {
        Toast.show({ message: error.reason, iconName:'pt-icon-error', intent: Intent.DANGER })
      } else if (result === 'OK')
        {
          Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
              Toast.show({ message: error.reason, iconName:'pt-icon-error', intent: Intent.DANGER })
            } else {
              Toast.show({ message: 'User successfully created!!', iconName:'pt-icon-person', intent: Intent.SUCCESS })
          }
            browserHistory.push('/')
          })
        }
    })
  }


  render() {
    return (
      <Flex align='center' justify='space-around'>
        <Box py={6}>
          <div className="pt-control-group pt-vertical" style={ {width: '300px'}}>
            <h3>SignUp</h3>
            <AutoForm
            ref={(signUpForm) => { this.signUpForm = signUpForm }}
            schema={ this.userSignupSchema }
            onSubmit={ doc => this.handleSignup(doc) }
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                this.signUpForm.submit()
              }

            }}
          >
          <TextField
            name='email'
            className='pt-large'
            placeholder='Email'
            iconInner={true}
            iconClasses='pt-icon pt-icon-envelope'
              />
          <TextField
            name='username'
            className='pt-large'
            placeholder='Username'
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
              className='pt-button pt-large pt-intent-danger'
              style={ {width: '300px'}}
              >SignUp</SubmitField>
            </ AutoForm>
          </div>
          <p>
            <a className="pt-icon pt-icon-user" onClick={this.loginUser}> Back to Login</a>
          </p>
        </Box>
      </Flex>
    )
  }
}

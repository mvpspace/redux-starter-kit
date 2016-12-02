import { SETTING_PRIVATE } from '/imports/environment/enums'
import { HttpBasicAuth } from 'meteor/jabbslad:basic-auth'

const { BASIC_AUTH, BASIC_AUTH_USER, BASIC_AUTH_PASSWORD } = SETTING_PRIVATE

if (BASIC_AUTH) {
  const basicAuth = new HttpBasicAuth(BASIC_AUTH_USER, BASIC_AUTH_PASSWORD)
  basicAuth.protect()
}

import { Meteor } from 'meteor/meteor'
import { PhoneNumbers } from './numbers'

Meteor.publish('users', () => Meteor.users.find({}))

Meteor.publish('phoneNumbers', () => PhoneNumbers.find({}))

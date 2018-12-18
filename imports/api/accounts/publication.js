import { Meteor } from 'meteor/meteor'
import { Numbers } from './numbers'

Meteor.publish('users', () => Meteor.users.find({}))

Meteor.publish('numbers', () => Numbers.find({}))
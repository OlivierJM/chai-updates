import { Meteor } from 'meteor/meteor'
import { Leaders } from './leaders'

Meteor.publish('leaders', () => Leaders.find().cursor)
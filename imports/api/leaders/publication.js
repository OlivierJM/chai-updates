import { Meteor } from 'meteor/meteor'
import { Leaders, Images } from './leaders'

Meteor.publish('leaders', () => Leaders.find().cursor)
Meteor.publish('images', () => Images.find().cursor)

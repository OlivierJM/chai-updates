import { Meteor } from 'meteor/meteor'
import Posts from './posts'

Meteor.publish('posts', () => Posts.find({}))
import { Meteor } from 'meteor/meteor'
import Departments from './departments'

Meteor.publish('departments', () => Departments.find({}))
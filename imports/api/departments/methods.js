import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Departments from './departments'

/**
 * @name Departments
 * @param { String } name
 */

 // department
 Meteor.methods({
     createDepartment(name){
        check(name, String)
        Departments.insert({
            name,
        }, err => err ? console.log(err.reason) : console.log('good department'))
     },
     removeDepartment(_id){
         check(_id, String)
         Departments.remove({
             _id,
            }, err => err ? console.log(err.reason) : console.log('removed department'))
     }
 })

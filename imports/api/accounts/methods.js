import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { PhoneNumbers } from './numbers' 

Meteor.methods({
    addNumber(name, number){
        check(name, String)
        check(number, String)
        PhoneNumbers.insert({
            name, 
            number
        }, err => err && console.log(err.reason))
    }
})
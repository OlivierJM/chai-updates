import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
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
    },
    addUser(user){
        check(user, Object)
        const isUserExist = PhoneNumbers.findOne({number: user.username})
        isUserExist && Accounts.createUser(user) || console.log("phone number not verified")
    }
})
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Numbers } from './numbers' 

Meteor.methods({
    addNumber(name, number){
        check(name, String)
        check(number, String)
        Numbers.insert({
            name, 
            number
        })
    }
})
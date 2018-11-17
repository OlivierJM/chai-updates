import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Posts from './posts'
/**
 * @name Posts
 * @param { String } title
 * @param { String } content
 * @requires Dates
 * @requires users ==> who has created this posts, the id can be gotten from the server
 */

 Meteor.methods({
     createPost(title, content){
        check(title, String)
        check(content, String)
        Posts.insert({
            title, 
            content
        }, err => err ? console.log(err.reason) : console.log('created the post'))
     },
     removePost(_id){
         check(_id, String)
         return Posts.remove({_id})
     }
 })
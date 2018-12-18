import { Mongo } from 'meteor/mongo'

export const PhoneNumbers = new Mongo.Collection('phoneNumbers', { idGeneration: String })
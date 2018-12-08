import { Mongo } from 'meteor/mongo'

export const Numbers = new Mongo.Collection('numbers', { idGeneration: String })
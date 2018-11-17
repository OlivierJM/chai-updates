import { Mongo } from 'meteor/mongo';

export default Leaders = new Mongo.Collection('leaders');

// The above might be converted into a FilesCollection because of the upload of the photos
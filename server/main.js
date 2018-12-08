import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import '../imports/api/posts/methods';
import '../imports/api/posts/publication';
import '../imports/api/posts/posts';
import '../imports/api/accounts/publication'
import '../imports/api/accounts/methods'
import '../imports/api/departments/publication'
import '../imports/api/departments/methods'
import '../imports/api/leaders/publication'
import '../imports/api/leaders/methods'
import '../imports/api/leaders/leaders'
import '../imports/api/accounts/numbers'
import '../imports/api/accounts/methods'

const user = {
    username: 'admin',
    password: 'chainama',
    profile: { name: 'communication' }
}
Meteor.startup(() => {
    Meteor.users.find().count() === 0 && Accounts.createUser(user)
})
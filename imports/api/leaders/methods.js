import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Leaders, Images } from "./leaders";

/**
 * @param {String} name
 * @param {String} position
 * @param {String} departmentId
 * @param {String} summary
 * @name Leaders
 * @description all CRUD of leaders
 */

Meteor.methods({
  createLeader(name, position, departmentId, summary) {
    check(name, String);
    check(position, String);
    check(departmentId, String);
    check(summary, String);

    Leaders.insert(
      {
        name,
        position,
        departmentId,
        summary
      },
      err => (err ? console.log(err.reason) : console.log("good department"))
    );
  },
  removeLeader(_id) {
    check(_id, String);
    Leaders.remove({ _id });
  },
  editImage(id, title, content) {
    check(id, String);
    check(title, String);
    check(content, String);
    Images.update(
      { _id: id },
      {
        $set: {
          "meta.title": title,
          "meta.content": content
        }
      }
    );
  },
  deletePost(id){
    check(id, String)
    Images.remove({_id: id})
  }
});

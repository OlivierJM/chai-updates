import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Posts from "./posts";
import Post from "../../ui/Post";
/**
 * @name Posts
 * @param { String } title
 * @param { String } content
 * @requires Dates
 * @requires users ==> who has created this posts, the id can be gotten from the server
 */

Meteor.methods({
  createPost(title, content, link, type) {
    check(title, String);
    check(content, String);
    check(link, String);
    check(type, String);
    Posts.insert(
      {
        title,
        content,
        link,
        type,
        createdAt: new Date()
      },
      err => (err ? console.log(err.reason) : console.log("created the post"))
    );
  },
  removePost(_id) {
    check(_id, String);
    return Posts.remove({ _id });
  },
  editPost(id, title, content) {
    check(id, String);
    check(title, String);
    check(content, String);
    Posts.update(
      { _id: id },
      {
        $set: {
          title,
          content
        }
      }
    );
  }
});

import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import Posts from '../api/posts/posts'


function Post(props) {
    const posts = props.posts.map(
      post => makepost(post)
    )
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
              { posts }
          </tbody>
        </table>
      </div>
    )
    
    function makepost(post) {
      return (
             <tr key={post._id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.link}</td>
            </tr>
    )
  }
}

export default PostContainer = withTracker(() => {
  Meteor.subscribe('posts')
  Meteor.subscribe('users')
  return {
    posts: Posts.find().fetch(),
  }
})(Post)

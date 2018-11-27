import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import Posts from '../api/posts/posts'


function Post(props) {
    const posts = props.posts.map(
      post => makepost(post)
    )
    return (
      <div>
        <ul>{ posts }</ul>
      </div>
    )
    
    function makepost(post) {
      return (
        <li key={post._id}>
        <a href={post.link} target="_blank">{post.title}</a>{'  '}
        <span>
          {post.content}
        </span>
      </li>
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

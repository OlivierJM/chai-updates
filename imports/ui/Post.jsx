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
        <a href={post.url} target="_blank">{post.title}</a>
      </li>
    )
  }
}

export default PostContainer = withTracker(() => {
  return {
    posts: Posts.find().fetch(),
  }
})(Post)

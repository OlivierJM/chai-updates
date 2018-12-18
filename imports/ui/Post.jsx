import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Images } from '../api/leaders/leaders'
import { PhoneNumbers } from '../api/accounts/numbers'


function Post(props) {
    const posts = props.posts.map(
      post => makepost(post)
    )
    return (
      <div>
        <table className='table-hover'>
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
              <td>{post.meta.title}</td>
              <td>{post.meta.content}</td>
              <td>{post.meta.link}</td>
            </tr>
    )
  }
}

export default PostContainer = withTracker(() => {
  Meteor.subscribe('posts')
  Meteor.subscribe('users')
  Meteor.subscribe('images')
  Meteor.subscribe('phoneNumbers')
  return {
    posts: Images.find().fetch(),
    numbers: PhoneNumbers.find().fetch()
  }
})(Post)

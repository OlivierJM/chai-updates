import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { withTracker } from 'meteor/react-meteor-data'
import { Images } from '../api/leaders/leaders'
import { PhoneNumbers } from '../api/accounts/numbers'


function Post(props) {
  const [isOpen, setModal] = useState(false)
  const [_post, setPost] = useState({})
  function toggle(e, id, title, content){
    setModal(!isOpen)
    setPost({
      id,
      title,
      content
    })
  }

    return (
      <div>
        <h4 className='text-center'>All Posts</h4>
          <Modal isOpen={isOpen} toggle={toggle} className={''}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            {_post.title}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Table hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Link</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
              { 
                props.posts && props.posts.map(post => (
                  (
                    <tr key={post._id}>
                     <td>{post.meta.title}</td>
                     <td>{post.meta.content}</td>
                     <td>{post.meta.link}</td>
                     <td>
                       <Button color="info" onClick={e => toggle(e, post._id, post.meta.title, post.meta.content)}>{isOpen ? 'close' : 'open'}</Button>
                     </td>
                   </tr>
                )))
               }
          </tbody>
        </Table>
      </div>
    )
    
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

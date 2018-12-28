import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  InputGroup,
  Input
} from "reactstrap";
import { withTracker } from "meteor/react-meteor-data";
import { Images } from "../api/leaders/leaders";
import { PhoneNumbers } from "../api/accounts/numbers";

function Post(props) {
  const [isOpen, setModal] = useState(false);
  const [_post, setPost] = useState({ });
  function toggle(e, id, title, content) {
    setPost({
      id,
      title,
      content
    });
    setModal(!isOpen);
  }

  function updatePostTitle({target: { value }}){
    setPost(state =>({...state, title: value}))
  }
  function updatePostContent({target: { value }}){
    setPost(state =>({...state, content: value}))
  }

  function handleSaveChanges(){
    const {id, title, content } = _post
    Meteor.call('editImage', id, title, content, err => {
      err ? console.log(err.reason) : setModal(!isOpen);
    })
  }
  return (
    <div>
      <h4 className="text-center">All Posts</h4>
      <Modal isOpen={isOpen} toggle={toggle} className={""}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input placeholder="Title" defaultValue={_post.title} onChange={updatePostTitle} required />
          </InputGroup>
          <br />
          <InputGroup>
            <Input placeholder="Content" defaultValue={_post.content} onChange={updatePostContent} required />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSaveChanges}>
            {'Save'}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
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
          {props.posts &&
            props.posts.map(post => (
              <tr key={post._id}>
                <td>{post.meta.title}</td>
                <td>{post.meta.content}</td>
                <td>{post.meta.link}</td>
                <td>
                  <span
                    onClick={e =>
                      toggle(e, post._id, post.meta.title, post.meta.content)
                    }
                  >
                    ✏️
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default (PostContainer = withTracker(() => {
  Meteor.subscribe("posts");
  Meteor.subscribe("users");
  Meteor.subscribe("images");
  Meteor.subscribe("phoneNumbers");
  return {
    posts: Images.find().fetch(),
    numbers: PhoneNumbers.find().fetch()
  };
})(Post));

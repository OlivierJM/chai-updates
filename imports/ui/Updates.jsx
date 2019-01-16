import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from "meteor/react-meteor-data";
import {
Table
} from "reactstrap";

function ListUsers({users}){
  return (
    <Table hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email/Phone</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {users &&
        users.map(user => (
          <tr key={user._id}>
            <td>{user.profile.name}</td>
            <td>{user.username}</td>
            <td>{user.profile.gender}</td>
          </tr>
        )) || null }
    </tbody>
  </Table>
  )
}

export default withTracker(() => {
  return {
    users: Meteor.users.find({}).fetch()
  }
})(ListUsers)



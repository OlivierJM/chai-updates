import React from "react"
import { Meteor } from "meteor/meteor"
import { withTracker } from "meteor/react-meteor-data"
import { Table } from "reactstrap"

function ListUsers({ users }) {
  return (
    <>
    <h3 className='text-center'>All Members</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email/Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {(users &&
            users.map(user => (
              <tr key={user._id}>
                <td>{user.profile.name}</td>
                <td>{user.username}</td>
                <td>{user.profile.gender}</td>
              </tr>
            ))) ||
            null}
        </tbody>
      </Table>
    </>
  )
}

export default withTracker(() => {
  Meteor.subscribe("users")
  return {
    users: Meteor.users.find({}).fetch()
  }
})(ListUsers)

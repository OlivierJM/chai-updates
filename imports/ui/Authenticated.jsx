import React, { Fragment } from 'react'
import { Meteor } from 'meteor/meteor'
import { withRouter, Link, Redirect } from 'react-router-dom'

function Authenticated({children,location: { pathname }}){
    return (
        <Fragment>
            { 
                Meteor.userId() ? children 
                : <Redirect to='/login'/>
            }
        </Fragment>
    ) 
}
function LoginSection(){
    return (
            <div className="row flex-center" style={{marginTop: '10%'}}>
                <div className="col-6 col">
                    <button className="btn-block">
                    <Link to='/login'>Login Here</Link>
                    </button>
                </div>
            </div>
    )
}

export default withRouter(Authenticated)

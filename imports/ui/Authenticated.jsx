import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withRouter, Link } from 'react-router-dom'

function Authenticated({children,location: { pathname }}){
    console.log(pathname)
    return (
        <div>
            { 
                Meteor.userId() ? children 
                : pathname === '/login'
                ? null
                : <LoginSection /> 
            }
        </div>
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

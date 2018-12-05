import React from 'react'
import { Meteor } from 'meteor/meteor'

function Authenticated({children}){
    return (
        <div>
            { Meteor.userId() && children || <div className='row flex-center' style={{marginTop: '10%'}}>You need to log in</div>}
        </div>
    ) 
}


export default Authenticated

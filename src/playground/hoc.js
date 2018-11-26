// Higher order Component - a Component (HOC) that renders another component
//Reuse Code - Render hijacking - Prop manipulation - Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
            <div>
                { props.isAdmin && <p>This is private info. Please dont share</p>}
                <WrappedComponent {...props}/>
            </div>
    )
}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Sorry you dont have access</p>
            )}
            
        </div>
    )
}
//requireAuthentication

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='this is the detail'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='this is the detail'/>, document.getElementById('app'))
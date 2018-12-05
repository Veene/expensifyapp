import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'

export const PrivateRoute = ({
    isAuthenticated, 
    //to see where Component value coming from look at comment below
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                //the Component is the value taken from whichever component is being invoked by PrivateRoute on the AppRouter.js
                <div>
                    <Header />
                    <Component {...props}/>
                </div>
            ) : (
                <Redirect to="/"/>
            )
        )} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute);
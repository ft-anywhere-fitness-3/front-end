import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, availableClasses, setAvailableClasses, ...rest }) => {
    return <Route {...rest} render={(props)=> {
        if (localStorage.getItem("token")) {
            return <Component availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} {...props}/>
        } else {
            return <Redirect to='/login'/>
        }    
    }}/>
}

export default PrivateRoute;